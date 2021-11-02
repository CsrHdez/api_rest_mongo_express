const express = require("express")
const categoryModel = require("../usecases/categories")
const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		const categories = await categoryModel.read()
		res.status(200).json({
			ok: true,
			msg: "All categories",
			payload: categories
		})
	} catch (err) {
		next(err)
	}
})

router.get("/:id", async (req, res, next) => {
	const { id } = req.params
	try {
		const categoryId = await categoryModel.getById(id)
		res.status(200).json({
			ok: true,
			msg: "Category",
			payload: categoryId
		})
	} catch (err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
	const { categoryData } = req.body
	try {
		const newCategory = await categoryModel.create(categoryData)
		res.status(201).json({
			ok: true,
			msg: "Category created",
			payload: newCategory
		})
	} catch (err) {
		next(err)
	}
})

router.patch("/:id", async (req, res, next) => {
	const { id } = req.params
	const { categoryUpdateData } = req.body
	try {
		const updatedCategory = await categoryModel.update(id, categoryUpdateData)
		res.status(201).json({
			ok: true,
			msg: "Updated successfuly",
			payload: updatedCategory
		})
	} catch (err) {
		next(err)
	}
})

router.delete("/:id", async (req, res, next) => {
	const { id } = req.params
	try {
		const deletedCategory = await categoryModel.del(id)
		res.status(200).json({
			ok: true,
			msg: "Deleted successfuly",
			payload: deletedCategory
		})
	} catch (err) {
		next(err)
	}
})

module.exports = router