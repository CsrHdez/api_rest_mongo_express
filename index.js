const express = require("express")
const apiRouter = require("./routes")
const app = express()

// Settings
const port = 8080

// Middlewares
app.use(express.json())

// Routes
apiRouter(app)

app.get("/", (req, res) => {
	res.send("Hola koders")
})

app.listen(port, () => {
	console.log(`server on running on ${port}`)
})