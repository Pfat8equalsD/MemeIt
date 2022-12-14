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

app.listen(3000);