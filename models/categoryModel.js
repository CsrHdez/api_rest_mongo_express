const mongoose = require("mongoose")
const Schema = mongoose.Schema()

const schema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		unique: true
	},
	description: {
		type: String,
		trim: true
	}
})

module.exports = {
	model: mongoose.model("Categories", schema),
	schema
}