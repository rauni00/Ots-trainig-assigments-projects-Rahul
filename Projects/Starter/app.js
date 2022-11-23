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
