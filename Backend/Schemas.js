const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memeSchema = new Schema({
	description: String,
	path: String,
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true
	}
})

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	Username: {
		type: String,
		required: true,
		unique: true
	},
	Password: {
		type: String,
		required: true,
	},
	memes: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Meme"
	}]
})

module.exports = {
	User: mongoose.model("User", userSchema),
	Meme: mongoose.model("Meme", memeSchema)
} 