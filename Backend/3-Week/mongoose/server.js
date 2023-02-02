import express from "express";
const app = express();
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import bookRoute from "./Routes/bookRoute.js";
dotenv.config();
const port = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(bodyParser.json());
// Mongodb Connection
mongoose.set("strictQuery", false);
mongoose
	.connect(MONGODB_URI)
	.then(() =>
		app.listen(port, () => {
			console.log(`Database Connected & Server Running on http://localhost:${port}`);
		})
	)
	.catch((err) => console.log(err));

// Routes
app.get("/", (req, res) => res.send("<h1>LMS</h1>"));
app.use("/api/book", bookRoute);
