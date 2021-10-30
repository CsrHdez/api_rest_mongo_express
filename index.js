const express = require("express")
const apiRouter = require("./routes")
const db = require("./lib/db")
const app = express()

// Settings
const port = 8080

// Middlewares
app.use(express.json())

// Routes
apiRouter(app)

app.get("/", (req, res) => {
	console.log(process.env)
	res.send("Hola koders")
})

app.listen(port, () => {
	console.log(`server on running on ${port}`)
	db.connect()
		.then(() => {
			console.log("DB connected")
		})
		.catch((err) => {
			console.log("Connection refused", err)
		})
})