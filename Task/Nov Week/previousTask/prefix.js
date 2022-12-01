// const latter = 'ABCDE';
// for (let i = 0; i < latter.length; i++) {
// 	let value = '';
// 	for (let j = 0; j < i; j++) {
// 		value = latter[i];
// 	}
// 	console.log(value + '\n');
// }

const fm = () => {
	console.log('first');
};

// fm();
const ar = [
	{ name: 'rahul', age: 558 },
	{ name: 'rahul', age: 52 },
	{ name: 'rauni', age: 54 },
];
// const sum = ar.map((a) => {
// 	return a.age;
// });
// console.log(sum);

// 1. Question
/*
  
    Using reduce,
    Get this Output -> ["Salman Khan", "Riya Rajput"]
    Hint -> Initial Value of Accumulator -> []
*/
// 2. Question
/*
    const users = [
        { firstName: "Akshay", lastName: "Khurana", age: 27, gender: "male" },
        { firstName: "Salman", lastName: "Khan", age: 55, gender: "male" },
        { firstName: "Riya", lastName: "Rajput", age: 34, gender: "female" },
        { firstName: "Simran", lastName: "Kapoor", age: 27. gender: "female" },
    ];
    Output ->
    [
        {fullName: "Akshay Khurana", age: 27},
        {fullName: "Salman Khan", age: 55}
    ]
*/
// const users = [
// 	{ firstName: 'Akshay', lastName: 'Khurana', age: 27 },
// 	{ firstName: 'Salman', lastName: 'Khan', age: 55 },
// 	{ firstName: 'Riya', lastName: 'Rajput', age: 34 },
// 	{ firstName: 'Simran', lastName: 'Kapoor', age: 27 },
// ];
// const ab = users
// 	.filter((item) => {
// 		if (item.firstName == 'Salman' || item.firstName == 'Akshay') {
// 			return true;
// 		}
// 	})
// 	.map((e) => {
// 		return { fullName: e.firstName + ' ' + e.lastName, age: e.age };
// 	});

// console.log(ab);
const users = [
	{ firstName: 'Akshay', lastName: 'Khurana', age: 27, gender: 'male' },
	{ firstName: 'Salman', lastName: 'Khan', age: 55, gender: 'male' },
	{ firstName: 'Riya', lastName: 'Rajput', age: 34, gender: 'female' },
	{ firstName: 'Simran', lastName: 'Kapoor', age: 27, gender: 'female' },
];
const Res = users
	.filter((user) => {
		if (user.gender === 'female') {
			return true;
		}
	})
	.map((user) => {
		return `My name is ${user.firstName} ${user.lastName}. I am ${user.age} year old.`;
	});
// console.log(Res);
let v = 'outw';
function a() {
	console.log(this);
}

// a();

const aa = [11, 70];
const bb = [854600, ...aa];
// console.log(...bb);

console.log('My name is akshy khusraba'.split(' '));
