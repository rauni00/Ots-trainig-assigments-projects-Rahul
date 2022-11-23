function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		document.getElementById('show').innerHTML = 'Not supported ';
	}
}
async function showPosition(position) {
	let lat = position.coords.latitude;
	let long = position.coords.longitude;
	// document.getElementById('show').innerHTML =
	// 	'Latitude =' + position.coords.latitude + '<br> Longitude =' + position.coords.longitude;
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

//  https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=lat&longitude=long&localityLanguage=en
