const usersRouter = require("./usersRouter")
const productsRouter = require("./productsRouter")

const apiRouter = app => {
	app.use("/users", usersRouter),
	app.use("/products", productsRouter)
}

module.exports = apiRouter