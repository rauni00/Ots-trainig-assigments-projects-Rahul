const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: { type: String, require: true },
	email: { type: String, require: true },
	mobile: { type: Number, require: true },
	password: { type: String, require: true },
});

module.exports = mongoose.model("users", userSchema);
