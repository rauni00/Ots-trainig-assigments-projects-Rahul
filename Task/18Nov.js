// ! =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-Morning=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Object Methods
// Object methods
// object.create()
// Object.assign()
// Object.entries()
// Object.keys()
// Object.values()
// Object.freeze()

// ! Work to Do
//! task 1
let count = 0;
function onceCall() {
	if (count) {
		throw new Error('fn call at once');
	}
	count = count + 1;
	return console.log('first call');
}

// onceCall();
// onceCall();

// task 2
// create a function to flat the array => [1,2,2,4,5,6,2,4,8,9]
const arr = [[1, 2], [2, 4, [5, 6, [2, 4]]], 8, 9];

// function flat(arr) {
// 	// console.log(arr.filter((a) => {}));
// 	console.log(arr.reduce((a,b) => {},[]));
// }
// flat(arr);
// const a = arr.reduce((a, b) => {
// 	return a, b;
// }, []);
console.log(...arr);

// task 3
// a = [{name:'amit'}, {name: 'Akshay'}]
// b = [{name: 'abcd'},{name:'abdc'}, {name:'kjdshck}, {name: 'Akshay'}, {name: 'akshay'}, {name:'AMit'}]
// result = [{name: 'Akshay'}, {name: 'akshay'}, {name:'AMit'}]
let a = 0;
for (a; a < 5; a++) {
	console.log(a);
}
