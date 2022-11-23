// // Quiz discussion
// for(a)
// ! ------------------------------ Morning ------------------------------------------------------

// ! Memory life cycle
// => Allocate memory
// => Use memory
// => Release memory

//                                    The memory heap and stack
//!               Stack                                                     	Heap

//   Primitive values and references	                                Objects and functions
//   Size is known at compile time	                                  Size is known at run time
//   Allocates a fixed amount of memory	                              No limit per object

//                                 References in JavaScript
//====>> JavaScript stores objects and functions in the heap.
//====>> Primitive values and references are stored in the stack.
//! --------------------------------------AfterNoon----------------------------------------------

// async & await used to return a promise

async function a() {
	return { name: 'hello', age: 10 };
}
async function b() {
	const user = await a();
	console.log(user, 'user details');
}

// b();
//  https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=lat&longitude=long&localityLanguage=en

// https://reqres.in/api/users
// async function get() {
// 	fetch('https://reqres.in/api/users');
// }

async function data() {
	try {
		const data = await fetch('https://reqres.in/api/users');
		if (!data.ok) throw new Error('something went wrong');

		const user = await data.json();
		console.log(user.data, 'user details');
	} catch (err) {
		console.log(err.message, 'hhhh');
	}
}

// data();
function locationa() {
	let a = navigator.geolocation.getCurrentPosition((data) => {
		let lete = data.coords.latitude;
		let long = data.coords.latitude;
	});
	async function showPosition(lat, long) {
		// let lat = position.coords.latitude;
		// let long = position.coords.longitude;
		try {
			const data = await fetch(
				`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`
			);
			if (!data.ok) throw new Error('something went wrong');
			const user = await data.json();
			console.log(`City: ${user.city}
		Country: ${user.countryName} 
		Locality :${user.locality}
		State: ${user.principalSubdivision}`);
			document.getElementById('Address').innerHTML = `City: ${user.city}
		Country: ${user.countryName} 
		Locality :${user.locality}
		State: ${user.principalSubdivision}`;
		} catch (err) {
			console.log(err.message, 'hhhh');
		}
	}
	showPosition(late, long);
}

locationa();
