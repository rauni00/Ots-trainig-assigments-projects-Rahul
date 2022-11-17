// const previousBMI = [];
// function calculateBMI() {
// 	let height = parseFloat(document.querySelector('#height').value);
// 	let weight = parseFloat(document.querySelector('#weight').value);
// 	let result = document.querySelector('#result');
// 	if (isNaN(height) || isNaN(weight)) result.innerHTML = 'Provide a valid Input!';
// 	else {
// 		let bmi = (weight / ((height * height) / 10000)).toFixed(0);
// 		previousBMI.push(bmi);
// 		result.innerHTML = `Over Weight : <span>${bmi}</span>`;

// 		if (previousBMI.length >= 10) {
// 			alert('Previous Bmi is Full');
// 			previousBMI.splice(0, 1);
// 		}
// 	}
// 	document.querySelector('#height').value = ' ';
// 	document.querySelector('#weight').value = ' ';
// 	const cal = (document.querySelector('#previousBMI').innerHTML = previousBMI);
// }

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
