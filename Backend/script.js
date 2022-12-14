require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const {User, Meme} = require('./Schemas');
const bcrypt = require('bcrypt');
const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost/testmemes").then();



app.get('/', (req, res) =>{
	res.json({message: "Hello"});
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



app.get("/memes", (req, res) =>{
	
})

app.get("/memes/:id", (req, res) =>{
	const id = req.params.id;

	
})

function verifyjwt(req,res,next){
    const token = req.headers['authorization'].split(' ')[1];
    if(!token) return res.status(401).json('Unauthorize user')

   try{
        const decoded = jwt.verify(token,process.env.PRIVATE_TOKEN);
        req.username = decoded
        next()

   }catch(e){
    res.status(400).json('Token not valid')
   }
}

app.post("/memes", verifyjwt,(req, res) =>{
	
})



app.patch("/memes/:id", verifyjwt,(req, res) =>{

})

app.delete("/memes/:id", verifyjwt, (req, res) =>{
	
})


app.listen(3000);