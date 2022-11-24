var sec = (min = hour = 0);
var clock = 0;
function stopWatch() {
	clearTimeout(clock);
	sec++;
	if (sec >= 59) {
		sec = 0;
		min++;
	}
	if (min >= 59) {
		min = 0;
		hour++;
	}
	document.getElementById('sec').innerHTML = sec < 10 ? '0' + sec : sec;
	document.getElementById('min').innerHTML = min < 10 ? '0' + min : min;
	document.getElementById('hour').innerHTML = hour < 10 ? '0' + hour : hour;
	clock = setTimeout('stopWatch()', 10);
}

function pause() {
	clearTimeout(clock);
	return true;
}

function play() {
	stopWatch();
	return true;
}

function reset() {
	sec = min = hour = 0;
	document.getElementById('sec').innerHTML = '00';
	document.getElementById('min').innerHTML = '00';
	document.getElementById('hour').innerHTML = '00';
	// stopWatch();
	clearTimeout(clock);
	return false;
}
