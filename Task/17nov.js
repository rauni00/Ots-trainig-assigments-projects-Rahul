//! --------------------------------------Morning ----------------------------------------------

// !-------------------------------Memorized Multiply--------------------------------------------------------

function multiply() {
	let cache = {};
	return function (x, y) {
		if (cache[`${x} ${y}`]) {
			console.log(`Already calculated Multiplication : ${cache[`${x} ${y}`]}`);
			return cache[`${x} ${y}`];
		}
		const result = x * y;
		cache[`${x} ${y}`] = result;
		console.log(`multiply of ${x} ${y} is: ${result}`);
	};
}
const memorizedX = multiply();

memorizedX(5, 5);
memorizedX(5, 5);
memorizedX(5, 2);
memorizedX(5, 6);
memorizedX(2, 5);

//! --------------------------------------AfterNoon----------------------------------------------
const countryData = (name) => {
	const data = fetch(`https://restcountries.com/v3.1/name/${name}/`)
		.then((data) => {
			if (!data.ok) throw new Error('Something Went wrong');
			return data.json();
		})
		.then((country) => console.log(country[0].borders));
};

const countryDataByAlpha = (name) => {
	const data = fetch(`https://restcountries.com/v2/alpha/${name}/`)
		.then((data) => {
			if (!data.ok) throw new Error('Something Went wrong ');
			return data.json();
		})
		.then((country) => console.log(country));
};

countryData('india');
countryDataByAlpha('in');
