const User = require("../../models/userModel").model

const create = async (userData) => {
	const newUser = new User(userData)
	
	return await newUser.save()
}

const read = async () => {
	return await User.find({}).exec()
}

const getById = async (idUser) => {
	return await User.findById(idUser).exec()
}

const update = async (idUser, userDataUpdate) => {
	return await User.findByIdAndUpdate(idUser, userDataUpdate).exec()
}

const del = async (idUser) => {
	return await User.findByIdAndDelete(idUser).exec()
}

module.exports = {
	create,
	read,
	update,
	del,
	getById
}