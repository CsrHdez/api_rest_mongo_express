const Category = require("../../models/categoryModel").model

const create = async (dataCategory) => {
	const newCategory = new Category(dataCategory)
	
	return await newCategory.save()
}

const read = async () => {
	return await Category.find({}).exec()
}

const getById = async idCategory => {
	return await Category.findById(idCategory).exec()
}

const update = async (idCategory, dataCategory) => {
	return await Category.findByIdAndUpdate(idCategory, dataCategory)
}

const del = async idCategory => {
	return await Category.findByIdAndDelete(idCategory)
}

module.exports = {
	create,
	read,
	getById,
	update,
	del
}