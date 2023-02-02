import express from "express";
import { addBook, deleteBook, getAllBooks, getSpecificBook, updateBook } from "../Controllers/bookController.js";
const router = express.Router();
router.route("/").get(getAllBooks).post(addBook);
router.route("/:id").get(getSpecificBook).patch(updateBook).delete(deleteBook);
export default router;
