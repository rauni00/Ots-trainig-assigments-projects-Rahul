import fs from "fs";
//! Create file
// fs.writeFile("info.txt", "Hello World", (err) => {
// 	if (err) throw err;
// 	console.log("Saved!");
// });

//! Read file
// fs.readFile("info.txt", "utf8", (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// });

//!Update file
// fs.appendFile("info.txt", "file updated", function (err) {
// 	if (err) throw err;
// 	console.log("Updated!");
// });

// !Update whole file
fs.writeFile("info.txt", "file updated", function (err) {
	if (err) throw err;
	console.log("Updated!");
});
