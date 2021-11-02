const Category = require("../../models/categoryModel").model

const create = (dataCategory) => {
	const newCategory = new Category(dataCategory)
	
	return await newCategory.save()
}

const read = () => {
	return await Category.find({}).exec()
}

const getById = (idCategory) => {
	return await Category.findById(idCategory).exec()
}

const update = (idCategory, dataCategory) => {
	return await Category.findByIdAndUpdate(idCategory, dataCategory)
}

const del = (idCategory) => {
	return await Category.findByIdAndDelete(idCategory)
}

module.exports = {
	create,
	read,
	getById,
	update,
	del
}