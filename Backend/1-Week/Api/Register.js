const express = require("express");
const router = express.Router();

router.post("/addUser", (req, res) => {
	const { name, email, password } = req.body;
	res.json({
		name: name,
		email: email,
		password: password,
	});
});

router.post("/update/:id", (req, res) => {
	const { id } = req.params;
});

module.exports = router;
