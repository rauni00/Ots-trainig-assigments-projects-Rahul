//! ------------------------------------------Morning ---------------------------------------------

console.log('hello 1');
Promise.resolve().then((a) => console.log('Promise 1'));
console.log('hello 2');
setTimeout(() => {
	console.log('TimeOut 1');
}, 500);
setTimeout(() => {
	Promise.resolve().then((a) => console.log('Promise 2', a));
	setTimeout(() => {
		Promise.resolve().then((a) => console.log('Promise 3'));
	}, 0);
	console.log('Hello 3');
	Promise.resolve().then((a) => console.log('Promise 4'));
	console.log('Hello 5');
}, 500);
console.log('Hello 5');

console.log('Bye!');

//! ------------------------------------------after Noon-----------------------------------------------

setTimeout(() => {
	Promise.resolve().then((a) => console.log('Resolved!'));
}, 1000);
setTimeout(() => {
	Promise.reject((a) => {
		console.log('Reject!!');
	});
}, 1000);
