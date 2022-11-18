let spaceCounter = 1;
for (let i = 1; i <= 7; i = i + 2) {
	var text = '';
	// Loop for Space

	for (let k = 1; k <= spaceCounter; k++) {
		text = text + ' ';
	}
	for (let j = 1; j <= 7 - i + 1; j++) {
		text = text + '*';
	}
	console.log(text + '\n');
	spaceCounter++;
}

// // console.log(1 * '1');
// const ab = 'bb';
// function a() {
// 	console.log('a');
// }
// obj = {
// 	b: 'b',
// 	g: function () {
// 		console.log('hello', ab);
// 	},
// };
// obj.g();
// console.log(typeof undefined);
// A* man** is*** walking**** beside***** the****** road*******

const rah = 'rahul rauniyar uw  wdd iii';
let rahul = rah.split(' ');
for (i = 0; i < rahul.length; i++) {
	let leng = rahul[i].length;
	rahul[i] = rahul[i].padEnd(leng + leng, '*');
}
console.log(rahul);
var c = 50;
var b = 50;
var r = eval('x+y');
console.log(r);

function multiply(n1, n2) {
	return n1 * n2;
}
// console.log(multiply(5, 3));

// const ar = [2, 3, 4, 5];
const area = (radius) => {
	return Math.PI * radius * radius;
};
const Result = (radius, logic) => {
	const output = [];
	for (let i = 0; i < radius.length; i++) {
		output.push(logic(radius[i]));
	}
	return output;
};

// console.log(Result(ar, area));
// .map((x) => x * 3);
const dbl = (x) => x * 3;

const ar = [2, 100, 3, 50, 4, 5, 6, 22];
const Res = ar.reduce((max, curr) => {
	if (curr > max) {
		max = curr;
	}
	return max;
}, 0);
console.log(Res);
