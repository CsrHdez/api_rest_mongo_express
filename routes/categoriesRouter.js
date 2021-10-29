const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
	res.status(200).json({
		ok: true,
		payload: [
			{
				name: "jardin",
				id: 1
			},
			{
				name: "hogar",
				id: 2
			}
		]
	})
})

router.get("/:id", (req, res) => {
	const { id } = req.params
	res.status(200).json({
		ok: true,
		payload: {
			id,
			category: "jardin"
		}
	})
})

router.post("/", (req, res) => {
	const { categoryData } = req.body
	res.status(201).json({
		ok: true,
		data: categoryData
	})
})

router.patch("/:id", (req, res) => {
	const { id } = req.params
	const { categoryUpdateData } = req.body
	res.status(201).json({
		ok: true,
		payload: {
			id,
			categoryUpdateData
		}
	})
})

router.delete("/:id", (req, res) => {
	const { id } = req.params
	res.status(200).json({
		ok: true,
		payload: {
			id,
			categoryDelete: {
				name: "Jardin"
			}
		}
	})
})

module.exports = router