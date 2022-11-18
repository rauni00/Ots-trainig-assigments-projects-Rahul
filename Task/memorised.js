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

// !-------------------------------Memorized Multiply--------------------------------------------------------

function multiply() {
	let cache = {};
	return function (x, y) {
		if (cache[`${x} ${y}`]) {
			console.log(`Already calculated Multiplication : ${cache[`${x} ${y}`]}`);
			return cache[`${x} ${y}`];
		}
		const result = x * y;
		cache[`${x} ${y}`] = result;
		console.log(`multiply of ${x} ${y} is: ${result}`);
	};
}
const memorizedX = multiply();

memorizedX(5, 5);
memorizedX(5, 5);
memorizedX(5, 2);
memorizedX(5, 6);
memorizedX(2, 5);
