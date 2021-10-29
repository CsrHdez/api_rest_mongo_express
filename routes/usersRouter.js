const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
	res.status(200).json({
		ok: true,
		payload: "todo bien"
	})
})

router.get("/:id", (req, res) => {
	const { id } = req.params
	
	res.json({
		ok: true,
		payload: id
	})
})

router.post("/", (req, res) => {
	const { userData } = req.body
	res.json( userData )
})

router.patch("/id", (req, res) => {
	const { id } = req.params
	
	res.json({
		ok: true,
		id: id
	})
})

router.delete("/:id", (req, res) => {
	const { id } = req.params
	const { userUpdateData } = req.body
	
	res.json({
		ok: true,
		id: id,
		user: userUpdateData
	})
})

module.exports = router