const express = require("express");
const User = require("../Model/User");
const router = express.Router();

router.get("/getUser", (req, res) => {
	User.find()
		.then((allUsers) => {
			res.json(allUsers.filter((item) => item.email));
		})
		.catch((err) => console.log(err));
});

router.post("/addUser", (req, res) => {
	const { name, email, password, mobile } = req.body;
	const user = new User({
		name: name,
		email: email,
		password: password,
		mobile: mobile,
	});
	User.find()
		.then((allUsers) => {
			const filterUser = allUsers.filter((item) => item.email === email);
			if (filterUser[0]) {
				res.status(400).json({ message: "User Already exist" });
			} else {
				user.save()
					.then((createdUser) => res.json(createdUser))
					.catch((err) => console.log(err));
			}
		})
		.catch((err) => console.log(err));
});

module.exports = router;
