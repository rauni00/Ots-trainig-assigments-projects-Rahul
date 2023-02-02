import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bp from "body-parser";
dotenv.config();
const app = express();

const port = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY;
app.use(bp.json());

app.post("/login", (req, res) => {
	const { email, password } = req.body;
	const payload = { email, password };
	const token = jwt.sign(payload, SECRET_KEY);
	res.json({ token });
});
app.get("/user", (req, res) => {
	const { token } = req.headers;
	const user = jwt.verify(token, SECRET_KEY);
	res.json(user);
});

app.listen(port, () => {
	console.log("Server Running on " + port);
});
