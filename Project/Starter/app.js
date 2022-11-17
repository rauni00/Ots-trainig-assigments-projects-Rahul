let previousGuesses = [];
let randomNumber = Math.ceil(Math.random() * 100 + 1);
let numberOfAttempts = 10;
const lowOrHi = document.querySelector('.lowOrHi');

document.title = 'OTS';
// Main Function
function checkGuess() {
	let guess = parseInt(document.getElementById('guessField').value);
	previousGuesses.push(guess);
	const guessesRemaining = (document.querySelector('.lastResult').innerHTML = numberOfAttempts);
	const guessSlot = (document.querySelector('.guesses').innerHTML = previousGuesses);
	if (guess === randomNumber) {
		document.querySelector('.lowOrHi').innerHTML = 'You guessed it correctly!';
		previousGuesses.splice(0, previousGuesses.length);
		numberOfAttempts = 10;
	} else if (guess > randomNumber) {
		document.querySelector('.lowOrHi').innerHTML = 'You guessed it more!';
		numberOfAttempts--;
	} else if (numberOfAttempts < 1) {
		alert('attempt over');
		setTimeout(() => {
			document.querySelector('.guesses').innerHTML = [];
			numberOfAttempts = 10;
		}, 2000);
	} else {
		document.querySelector('.lowOrHi').innerHTML = 'You guessed it less!';
		numberOfAttempts--;
	}
	document.getElementById('guessField').value = ' ';
}

// function sum() {
// 	let cache = {};
// 	return function (x, y) {
// 		if (cache[(x, y)]) {
// 			console.log(`already calculated sum of ${x} ${y} = ${cache[(x, y)]}`);
// 			return (cache[(x, y)] = x + y);
// 		}
// 		console.log(`calculating sum of ${x} ${y} = ${x + y}`);
// 		let result = y + x;
// 		cache[(x, y)] = result;
// 		console.log(cache);
// 		return result;
// 	};
// }
// const memoizedSum = sum();
// memoizedSum(4, 6);
// memoizedSum(4, 5);
// memoizedSum(4, 2);
// memoizedSum(4, 2);
// memoizedSum(4, 7);
// memoizedSum(4, 9);
// memoizedSum(4, 6);

// function sumofNumbers() {
// 	let cache = {};
// 	return function (x, y) {
// 		if (cache[(x, y)]) {
// 			console.log(`Already calculated sum: ${x} ${y}`);
// 			return cache[(x, y)];
// 		}
// 		console.log(`Sum of ${x} ${y} is:`);
// 		const result = x + y;
// 		cache[(x, y)] = result;
// 		console.log(result);
// 	};
// }
// const memorized = sumofNumbers();
// memorized(4, 5);
// memorized(4, 5);
// memorized(4, 5);
// memorized(16, 10);
// memorized(4, 5);
