const express = require("express")
const usersModel = require("../usecases/users/")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		const users = await usersModel.read()
		res.status(200).json({
			ok: true,
			msg: "Done!",
			payload: { users }
		})
	} catch (err) {
		next(err)
	}
})

router.get("/:id", async (req, res, next) => {
	const { id } = req.params
	try {
		const userById = await usersModel.getById(id)
		res.json({
			ok: true,
			payload: {
				ok: true,
				msg: "User",
				user: userById
			}
		})
	} catch (err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
	const { userData } = req.body
	try {
		const newUser = await usersModel.create(userData)
		res.status(201).json({
			ok: true,
			msg: "Done!",
			payload: { newUser }
		})
	} catch (err) {
		next(err)
	}
})

router.patch("/id", async (req, res, next) => {
	const { id } = req.params
	const { userUpdateData } = req.body
	try {
		const userUpdate = await usersModel.update(id, userUpdateData)
		res.json({
			ok: true,
			msg: "Usuario actualizado con exito!",
			payload: {
				user: userUpdate,
			}
		})
	} catch (err) {
		next(err)
	}
})

router.delete("/:id", async (req, res, next) => {
	const { id } = req.params
	try {
		const userDelete = await usersModel.del(id)
		res.json({
			ok: true,
			msg: "Usuario eliminado con exito!",
			payload: {
				user: userDelete
			}
		})		
	} catch (err) {
		next(err)
	}
	
})

module.exports = router