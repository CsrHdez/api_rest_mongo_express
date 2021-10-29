const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
	res.json({
		ok: true,
		payload: [
			{
				name: "cesar",
				lastName: "Hernandex"
			},
			{
				name: "Javier",
				lastName: "Bautista"
			}
		]
	})
})

router.get("/:id", (req, res) => {
	const { id } = req.params
	res.json({
		ok: true,
		payload: {
			id
		}
	})
})

router.post("/", (req, res) => {
	const { productData } = req.body
	res.json({
		ok: true,
		payload: productData
	})
})

router.patch("/:id", (req, res) => {
	const { id } = req.params
	const { productUpdateData } = req.body
	res.status(201).json({
		ok: true,
		payload: {
			id,
			payload: productUpdateData
		}
	})
})

router.delete("/:id", (req, res) => {
	const { id } = req.params
	res.status(200).json({
		ok: true,
		payload: {
			id,
			deleteProduct: {
				name: "Product 1",
				price: 1200
			}
		}
	})
})

module.exports = router