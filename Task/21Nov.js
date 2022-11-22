// // Quiz discussion
// for(a)

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
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=lat&longitude=long&localityLanguage=en

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

data();
