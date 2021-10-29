const express = require("express")
const app = express()

// Settings
const port = 8080

// Middlewares
app.use(express.json())

app.get("/", (req, res) => {
	res.send("Hola koders")
})

app.listen(port, () => {
	console.log(`server on running on ${port}`)
})