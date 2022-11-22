// ! =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-Morning=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Object methods
// object.create() => This method is used to create a new object with the specified prototype object and properties.
// Example----------------
// const obj = Object.create({});
// obj.name = 'Rahul';
// obj.age = 18;
// console.log(obj);

// Object.assign()
// This method is used to copy enumerable and own properties from a source object to a target object
// const object1 = { a: 1, b: 2, c: 3 };
// const object3 = { g: 1, h: 2, i: 3 };
// const obj2 = Object.assign({ name: 'rahul' }, object3);
// console.log(obj2);

// Object.entries()
// This method returns an array with arrays of the key, value pairs.
// const object1 = { a: 1, b: 2, c: 3 };
// console.log(Object.entries(object1)[0]);

// Object.keys()
// This method returns an array of a given object's keys
// const object1 = { a: 1, b: 2, c: 3 };
// console.log(Object.keys(object1));

// Object.values()
// returns an array of values.
// const object1 = { a: 1, b: 2, c: 3 };
// console.log(Object.values(object1));

// Object.freeze()
// prevents existing properties from being removed.
// const object1 = { a: 1, b: 2, c: 3 };
// const newObj = Object.freeze(object1);
// object1.hello = 'bye';
// console.log(newObj);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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

// function flat(arr) {}
// console.log(flat(arr));
let flatArray = arr.reduce((acc, curVal) => {}, []);
// console.log(flatArray);
// const a = arr.reduce((a, b) => {
// 	return a, b;
// }, []);

// task 3
let a = [{ name: 'amit' }, { name: 'Akshay' }];
let b = [
	{ name: 'abcd' },
	{ name: 'abdc' },
	{ name: 'kjdshck' },
	{ name: 'Akshay' },
	{ name: 'akshay' },
	{ name: 'Amit' },
];

// result = [{name: 'Akshay'}, {name: 'akshay'}, {name:'AMit'}]

let newObj = {};
a.map((x) => {
	let value = x.name.toLowerCase();
	newObj[value] = x.name.toLowerCase();
});
const filterName = b.filter((item) => {
	let nameValue = item.name.toLowerCase();
	return newObj[nameValue] ? item : null;
});

console.log(filterName);
