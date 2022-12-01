// let str = '5hello3bye2ok';

// for (let i = 0; i < str.length; i++) {
// 	let num = Number(str.charAt(i));

// 	console.log(num);
// }

// for (let i = 1; i <= 7; i++) {
// 	let result = '';
// 	for (let j = 1; j <= i; j++) {
// 		result = j;
// 		// if (i % 2 == 0) {
// 		// 	result = result + j;
// 		// } else {
// 		// 	result = result + '*';
// 		// }
// 	}
// 	console.log(result + '\n');
// }

let spaceCounter = 3;
for (let i = 1; i <= 7; i = i + 2) {
	var text = '';
	// Loop for Space
	for (let k = 1; k <= spaceCounter; k++) {
		text = text + ' ';
	}
	// Loop for Printing *
	// for (let j = 1; j <= i; j++) {
	// 	text = text + '*';

	// }
	for (let j = 1; j <= i; j++) {
		text = text + '*';
		for (let m = j; m >= j; m--) {
			text = text + '*';
		}
	}
	console.log(text + '\n');
	spaceCounter--;
}
