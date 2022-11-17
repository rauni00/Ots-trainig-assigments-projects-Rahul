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

// var add3 = add(3); // returns a function

// add3(4); // returns 7

// function sum() {
// 	let cache = {};
// 	return function (x, y) {
// 		if (cache[(x, y)]) {
// 			console.log(`already calculated sum of ${x} ${y}`);
// 			return cache[(x, y)];
// 		}
// 		console.log(`calculating sum of ${x} ${y}`);
// 		let result = y + x;
// 		cache[(x, y)] = result;
// 		console.log(result);
// 		return result;
// 	};
// }
// const memoizedSum = sum();
// memoizedSum(4, 6);
// memoizedSum(8, 9);
// memoizedSum(4, 6);
