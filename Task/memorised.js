// !-------------------------------Memorized Sum--------------------------------------------------------
function sum() {
	let cache = {};
	return function (x, y) {
		if (cache[`${x} ${y}`]) {
			console.log(`Already calculated sum: ${x} ${y}`);
			console.log(cache);
			return cache[`${x} ${y}`];
		}
		const result = x + y;
		cache[`${x} ${y}`] = result;
		console.log(`Sum of ${x} ${y} is: ${result}`);
	};
}
const memorized = sum();
// memorized(4, 5);
// memorized(5, 4);
// memorized(5, 4);
// memorized(16, 10);

// ! ------------------------------ add name
function add() {
	const arr = [];
	return function inner(name) {
		arr.push(name);
		console.log(`Name are - ${arr} `);
		return inner;
	};
}

const addName = add();
addName('Akshay')('Khurana')('Manisha')('Rahul');
