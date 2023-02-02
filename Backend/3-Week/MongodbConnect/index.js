import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import books from "./data/books.js";

dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

async function main() {
	if (MONGODB_URI) {
		const client = new MongoClient(MONGODB_URI);
		try {
			await client.connect();
			console.log("Connection Established Successfully!");
			// List Databases
			// await listDatabases(client);
			// CRUD Operations
			// Create
			//   await addNewBookEntry(client, {
			//     title: "Six Point Noone",
			//     author: "Chetan Bhagat",
			//     description:
			//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
			//     display: true,
			//   });
			await addMultipleBookEntries(client, books);
		} catch (error) {
			console.log("Error : ", error);
		} finally {
			await client.close();
		}
	} else {
		console.log("Please send a valid Mongo Cluster URI");
	}
}

main().catch(console.error);

async function listDatabases(client) {
	const databasesList = await client.db().admin().listDatabases();
	console.log("Databases: ");
	databasesList.databases.forEach((db) => {
		console.log(`- ${db.name}`);
	});
}

async function addNewBookEntry(client, newBook) {
	const result = await client.db("library_management").collection("listOfBooks").insertOne(newBook);
	console.log(result);
}

async function addMultipleBookEntries(client, listOfBooks) {
	const result = await client.db("library_management").collection("listOfBooks").insertMany(listOfBooks);
	console.log(result);
}

// please do not disturb
