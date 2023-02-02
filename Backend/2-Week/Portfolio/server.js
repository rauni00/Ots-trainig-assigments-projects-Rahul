import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const Port = process.env.PORT || 8080;
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
	res.status(200).sendFile(path.join(`${__dirname}`, "./templates/Home.html"));
});
app.get("/about", (req, res) => {
	res.status(200).sendFile(path.join(`${__dirname}`, "./templates/About.html"));
});

app.get("/*", (req, res) => {
	res.status(200).sendFile(path.join(`${__dirname}`, "./templates/PageNotFound.html"));
});

app.listen(Port, () => {
	console.log(`Server is running on Localhost ${Port}`);
});
