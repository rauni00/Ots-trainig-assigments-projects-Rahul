function change(e) {
	let first = 0;
	let second = 0;
	let third = 0;
	if (e.target.name == 'first') {
		first = e.target.value;
	} else if (e.target.name == 'second') {
		second = e.target.value;
	} else if (e.target.name == 'third') {
		third = e.target.value;
	}
	document.getElementById('start').style.color =
		'rgb(' + first + ',' + second + ',' + third + ')';
}

// let time = new Date();
// console.log(time.toUTCString());
// let hour = time.getHours();
// let min = time.getMinutes();
// let second = time.getSeconds();
// setInterval(() => {
// 	console.log(`${hour} : ${min}: ${second}`);
// 	document.getElementById('time').innerHTML = `${hour} : ${min}: ${second}`;
// }, 1000);

// function time() {
// 	var d = new Date();
// 	var s = d.getSeconds();
// 	var m = d.getMinutes();
// 	var h = d.getHours();
// 	console.log(h + ':' + m + ':' + s);
// 	// document.write(h + ':' + m + ':' + s);
// }

// setInterval(time, 1000);
