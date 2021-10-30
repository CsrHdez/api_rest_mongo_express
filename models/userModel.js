const mongoose = require("mongoose")
const Schema = mongoose.Schema()

const schema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		minlength: 1,
		maxlength: 200,
	},
	lastName: {
		type: String,
		required: true,
		trim: true,
		minlength: 1,
		maxlength: 200
	},
	userName: {
		type: String,
		required: true,
		trim: true,
		unique: true,
		minlength: 4,
		maxlength: 15
	},
	password: {
		type: String,
		required: true,
		trim: true,
		minlength: 20
	}
})

module.exports = {
	model: moongose.model("Users", schema),
	schema
}