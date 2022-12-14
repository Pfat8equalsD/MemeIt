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
		unique: true,
		validate: [
			{
				validator: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test,
				message: "the field must be a valid email"
			},{
				validator: /^.*@stud\.acs\.upb\.ro$/.test,
				message: "the field must end in @stud.acs.upb.ro"
			}
		]
	},
	Username: {
		type: String,
		required: true,
		unique: true,
		validate: [
			{
				validator: /^.{8,32}$/.test,
				message: "the field is not between 8 and 32 characters"
			},
			{
				validator: /^[\w ]+$/.test,
				message: "the field must only contain letters, numbers, underscores or spaces"
			}
		]
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