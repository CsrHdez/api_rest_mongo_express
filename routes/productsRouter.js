const express = require("express")
const productsModel = require("../usecases/products")
const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		const products = await productsModel.read()
		res.status(200).json({
			ok: true,
			msg: "Done!",
			payload: {
				products
			}
		})
	} catch (err) {
		next(err)
	}
})

router.get("/:id", async (req, res, next) => {
	const { id } = req.params
	try {
		const product = await productsModel.getById(id)
		res.status(200).json({
			ok: true,
			msg: "Done!",
			payload: {
				product
			}
		})
	} catch (err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
	const { productData } = req.body
	try {
		const newProduct = await productsModel.create(productData)
		res.status(201).json({
			ok: true,
			msg: "Done!",
			payload: {
				product: newProduct
			}
		})
	} catch (err) {
		next(err)
	}
})

router.patch("/:id", async (req, res, next) => {
	const { id } = req.params
	const { productUpdateData } = req.body
	try {
		const updateProduct = await productsModel.update(id, productUpdateData)
		res.status(201).json({
			ok: true,
			msg: "Done!",
			payload: {
				product: updateProduct
			}
		})
	} catch (err) {
		next(err)
	}
})

router.delete("/:id", async (req, res, next) => {
	const { id } = req.params
	try {
		const deleteProduct = await productsModel.del(id)
		res.status(204).json({
			ok: true,
			msg: "Done!",
			payload: {
				product: deleteProduct
			}
		})
	} catch (err) {
		next(err)
	}
})

module.exports = router