require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const {User, Meme} = require('./Schemas');
const bcrypt = require('bcrypt');
const app = express();
const multer  = require('multer')
const upload = multer({ 
	dest: 'uploads/'
})

app.use(express.json());

mongoose.connect("mongodb://localhost/testmemes").then();



app.post('/post/:id', verifyjwt, async (req, res, next)=>{
	let user = await User.findOne({Username: req.username});
	let meme = await Meme.findById(req.params.id)
	if (user._id.toString() != meme.owner._id.toString())
		return res.status(403).json({message:"You can only modify your memes"});
	next()
},upload.single('meme'), async (req, res) =>{
	let meme = await Meme.findById(req.params.id);
	await meme.update({
		path: req.file
	})
	res.send({file: req.file})
})

app.post('/register', async (req, res) =>{
	errs = {};
	if (!req.body.email) 
		errs.email = "This field is required"
	if (!req.body.username){
		errs.username = "This field is required"
	}
	if (!req.body.password)
		errs.password = "This field is required"

	if(Object.keys(errs).length > 0)
		return res.status(400).json(errs)
	if(await User.exists({Username:req.body.username}))
		errs.username = "Username already exists"
	if(await User.exists({email:req.body.email}))
		errs.email = "Email already exists"
	if(Object.keys(errs).length > 0)
		return res.status(400).json(errs)

	errm = []
	erru = []
	errp = []
	if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(req.body.email))
		errm.push("The field must be a valid email")
	if(!/^.+@stud.acs.upb.ro$/.test(req.body.email))
		errm.push("The field must end in @stud.acs.upb.ro")
	let cnt = req.body.username.length
	if(cnt < 8 || cnt > 32)
		erru.push("Username must be between 8 and 32 characters")
	cnt = req.body.password.length
	if(cnt < 8 || cnt > 32)
		erru.push("Password must be between 8 and 32 characters")
	if(errm.length > 0)
		errs.email = errm
	if(erru.length > 0)
		errs.username = erru
	if(errp.length > 0)
		errs.password = errp

	if(Object.keys(errs).length > 0)
		return res.status(400).json(errs)
	bcrypt.hash(req.body.password, 10, function(err, hash) {
		const user = new User({
			Username: req.body.username,
			email: req.body.email,
			Password: hash
		})
		user.save().then();
		res.json({
			username: user.Username,
			email: user.email,
			password: hash,
			id: user._id.toString()
		})
	});
})

app.post('/login', async (req, res) =>{
	const pass = req.body.password;
	const name = req.body.username;
	let auth = false;
	const user = await User.findOne({Username: name});
	bcrypt.compare(pass, user.Password, (err, result) => {
		if(result == true){
			res.json({
				token:jwt.sign(name, process.env.PRIVATE_TOKEN)
			})
		}else{
			res.json({
				message: "Passwords do not match"
			})
		}
	});
	
})



app.get("/memes", async (req, res) =>{
	const memes = await Meme.find()

	
	res.json(memes)
})

app.get("/memes/:id", async (req, res) =>{
	const id = req.params.id;
	const meme = await Meme.findById(id);
	res.json({
		description: meme.description,
		id: id
	});
})

function verifyjwt(req,res,next){
    let token = req.headers['authorization'];
    if(!token) return res.status(401).json({message: "You must be logged in to access these fields"})
	token = token.split(' ')[1]
   try{
        const decoded = jwt.verify(token,process.env.PRIVATE_TOKEN);
        req.username = decoded
        next()

   }catch(e){
    res.status(400).json('Token not valid')
   }
}

app.post("/memes", verifyjwt, async (req, res) =>{
	let user = await User.findOne({Username: req.username});
	if(req.body.description.length > 2500)
		return res.status(400).json({message:"Description must be below 2500 characters"})
	let meme = new Meme({
		description: req.body.description,
		owner: user._id
	})
	await meme.save();
	res.json({
		description: meme.description,
		id: meme._id.toString()
	})
	user.memes.push(meme._id);
	await user.save();
})



app.patch("/memes/:id", verifyjwt, async (req, res) =>{
	let user = await User.findOne({Username: req.username});
	if(req.body.description.length > 2500)
		return res.status(400).json({message:"Description must be below 2500 characters"})
	let meme = await Meme.findById(req.params.id)
	if (user._id.toString() != meme.owner._id.toString())
		return res.status(403).json({message:"You can only modify your memes"});
	await meme.update({
		description: req.body.description
	})
	res.json({
		description: meme.description,
		id: meme._id.toString()
	})
})

app.delete("/memes/:id", verifyjwt, async (req, res) =>{
	let user = await User.findOne({Username: req.username});
	let meme = await Meme.findById(req.params.id)
	console.log(user._id.toString())
	console.log(meme.owner._id.toString())
	if (user._id.toString() != meme.owner._id.toString())
		return res.status(403).json({message:"You can only delete your memes"})

	await User.updateOne({Username:req.username},{
			$pullAll: {
				memes: [meme._id]
			}
		})
	console.log(meme._id)
	console.log((await User.findById(user._id)).memes)
	await meme.remove()
	res.json({message: "Deleted"})
})


app.listen(3000);