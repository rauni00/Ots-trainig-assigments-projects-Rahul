import Book from "../Models/Book.js";

const getAllBooks = (req, res) => {
	Book.find()
		.then((books) => {
			if (books.length > 0) {
				res.status(200);
				res.render("books", {
					books,
				});
				// res.json(book);
			} else {
				res.json({ msg: "Book not found" });
			}
		})
		.catch((err) => console.log(err));
};
const addBook = (req, res) => {
	// try {
	// 	const newBookDetails = await Book.create(req.body);
	// 	//newBookDetails.save();
	// 	newBookDetails.createdAt = "1999-01-24T13:05:58.142Z";
	// 	console.log("Book : ", newBookDetails);
	// } catch (error) {
	// 	console.log(error.message);
	// }
	Book.find({ title: req.body.title })
		.then((book) => {
			if (book.length > 0) {
				res.json({ msg: "Book is Already exist" });
			} else {
				const newBook = new Book(req.body);
				newBook.createdAt = "1999-01-24T13:05:58.142Z";
				newBook.description = "RAHUL";
				newBook
					.save()
					.then((a) => res.json(a))
					.catch((err) => console.log(err.message));
			}
		})
		.catch((err) => console.log(err.message));
};

const getSpecificBook = (req, res) => {
	const { id } = req.params;
	Book.find({ _id: id })
		.then((book) => {
			if (book.length > 0) {
				res.json(book);
			} else {
				res.json({ msg: `Id ${id} is not match with any book` });
			}
		})
		.catch((err) => res.json({ msg: `Id ${id} is not match with any book` }));
};

const updateBook = (req, res) => {
	const { id } = req.params;
	const { title, author, description, display } = req.body;
	const updateBook = {
		title: title,
		author: author,
		description: description,
		display: display,
	};
	Book.findOneAndUpdate({ _id: id }, { $set: updateBook }, { new: true })
		.then((book) => {
			if (book) {
				res.json(book);
			} else {
				res.json({ msg: "Book Not Found" });
			}
		})
		.catch((err) => console.log(err));
};

const deleteBook = (req, res) => {
	const { id } = req.params;
	Book.deleteOne({ _id: id })
		.then((book) => {
			if (book.deletedCount) {
				res.json({ msg: "Book Deleted" });
			} else {
				res.json({ msg: "book not found" });
			}
		})
		.catch((err) => console.log(err));
};

export { getAllBooks, addBook, getSpecificBook, updateBook, deleteBook };
