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
