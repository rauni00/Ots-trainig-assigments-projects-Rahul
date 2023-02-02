import express from "express";
// import { MongoClient } from "mongodb";
import { engine } from "express-handlebars";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import bookRoute from "./Routes/bookRoute.js";
import dotenv from "dotenv";
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";
// import books from "./data/books.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const app = express();
// app.engine(".hbs", exphbs.engine({ extname: ".hbs", defaultLayout: "main" }));
// app.engine(
// 	"handlebars",
// 	exphbs.engine({
// 		defaultLayout: "main",
// 		// ...implement newly added insecure prototype access
// 		handlebars: allowInsecurePrototypeAccess(Handlebars),
// 	})
// );
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(bodyParser.json());
// Mongodb Connection
mongoose.set("strictQuery", false);
mongoose
	.connect(MONGODB_URI)
	.then(() =>
		app.listen(PORT, () => {
			console.log(`Database Connected & Server Running on http://localhost:${PORT}`);
		})
	)
	.catch((err) => console.log(err));

// Routes
app.get("/", (req, res) => {
	res.status(200);
	res.render("home");
});
app.use("/api/book", bookRoute);

// async function main() {
// 	if (MONGODB_URI) {
// 		const client = new MongoClient(MONGODB_URI);
// 		try {
// 			await client.connect();
// 			console.log("Connection Established Successfully!");
// 			await addMultipleBookEntries(client, books);
// 			await getBooks(client);
// 		} catch (error) {
// 			console.log("Error : ", error);
// 		} finally {
// 			await client.close();
// 		}
// 	} else {
// 		console.log("Please send a valid Mongo Cluster URI");
// 	}
// }

// main().catch(console.error);
// async function addMultipleBookEntries(client, listOfBooks) {
// 	const result = await client.db("library_management").collection("listOfBooks").insertMany(listOfBooks);
// }

// app.get("/", (req, res) => {
// 	res.status(200);
// 	res.render("home");
// });

// async function getBooks(client) {
// 	const result = await client.db("library_management").collection("listOfBooks").find();
// 	// console.log(result);
// 	return result;
// }
// app.get("/books", (req, res) => {
// 	console.log(getBooks());
// 	res.status(200);
// 	res.render("books", {
// 		books,
// 	});
// });

// app.get("/books/:id", (req, res) => {
// 	const { id } = req.params;

// 	const searchedBook = books.find((book) => {
// 		return book.id == id;
// 	});

// 	if (searchedBook) {
// 		res.status(200);
// 		res.render("book-details", {
// 			book: {
// 				searchedBook,
// 			},
// 		});
// 	}
// });

// app.get("/add-book", (req, res) => {
// 	res.status(200);
// 	res.render("new-book");
// });

// app.listen(PORT, () => {
// 	console.log(`Server running at http://localhost:${PORT}/`);
// });
