const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const identifyUser = require("./Middleware/IdentifyUser");
const port = 8080;
app.use(bodyParser.urlencoded({ extended: true }));
mongoose
	.connect("mongodb://127.0.0.1:27017/demo")
	.then((res) => console.log("mongodb Connected"))
	.catch((err) => console.log(err));

app.use("/users", () => {
	console.log("first");
});

app.use("/user", require("./Api/users"));

app.use("/register", identifyUser, require("./Api/Register"));

app.get("/test", (req, res) => res.send("<h1>Hello World</h1>"));

app.listen(port, () => console.log(`Server running on port ${port}`));
