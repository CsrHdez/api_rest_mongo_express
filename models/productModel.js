const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		minlength: 1,
		maxlength: 200,
	},
	price: {
		type: Number,
		required: true,
		trim: true,
		minlength: 1,
		maxlength: 100
	}
})

module.exports = {
	model: mongoose.model("Products", schema),
	schema
}