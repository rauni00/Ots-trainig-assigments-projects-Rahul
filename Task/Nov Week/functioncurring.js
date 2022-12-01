function output(name) {
	const arr = [];
	return function add() {
		arr.push(name);
		return add;
	};
}
const isAdd = output();
console.log(isAdd());

// console.log(`Names are -${arr.forEach((a) => a)}`);
