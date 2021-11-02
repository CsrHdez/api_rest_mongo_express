const Product = require("../../models/productModel").model

const create = async (dataProduct) => {
	const newProduct = new Product(dataProduct)
	
	return await newProduct.save()
}

const read = async () => {
	return await Product.find({}).exec()
}

const getById = async (idProduct) => {
	return await Product.findById(idProduct).exec()
}

const update = async (idProduct, dataProduct) => {
	return await Product.findByIdAndUpdate(idProduct, dataProduct).exce()
}

const del = async (idProduct) => {
	return await Product.findByIdAndDelete(idProduct)
}

module.exports = {
	create,
	read,
	getById,
	update,
	del
}