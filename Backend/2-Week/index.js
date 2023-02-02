import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import { userRouter } from "./routes/userRoutes.js";
const app = express();
const Port = process.env.PORT || 3000;
dotenv.config();
app.use(bodyParser.json());

app.use("/users", userRouter);

app.listen(Port, () => {
	console.log(`Server is running on Localhost ${Port}`);
});
