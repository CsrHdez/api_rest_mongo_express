const bcrypt = require("bcrypt")
const saltRounds = 10

const hashPass = plainPass => {
	let hashsed_pass = ""
	bcrypt.genSalt(saltRounds, (err, salt) => {
		bcrypt.hash(plainPass, salt, (err, hash) => {
			hashsed_pass = hash
		})
	})
	return hashsed_pass
}

const comparePass = (plainPass, hashPass) => {
	bcrypt.compare(plainPass, hashPass, (err, result) => {
		return result
	})
}

module.exports = {
	hashPass,
	comparePass
}