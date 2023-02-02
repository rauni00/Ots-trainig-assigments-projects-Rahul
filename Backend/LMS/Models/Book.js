import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
	title: String,
	author: String,
	authorEmail: {
		type: String,
		lowercase: true,
		minLength: 10,
	},
	pages: {
		type: Number,
		required: true,
		min: 1,
		max: 200,
		validate: {
			validator: (value) => value % 2 === 0,
			message: (input) => {
				`No. of Pages in the Book Can't be Odd. Pages Entered - ${input.value}.`;
			},
		},
	},
	description: String,
	createdAt: {
		type: Date,
		immutable: true,
		default: () => Date.now(),
	},
	display: {
		type: Boolean,
		required: true,
	},
});

export default mongoose.model("listOfBooks", bookSchema);
