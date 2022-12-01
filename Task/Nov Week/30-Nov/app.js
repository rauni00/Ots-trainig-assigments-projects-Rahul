const imgLink =
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm4n6vdsJDdO8-9W27dqSyfe6hPzP_dYwPsg&usqp=CAU';
let count = 16;
for (let i = 0; i < 16; i++) {
	let img = document.querySelector('div');
	let newImg = document.createElement('img');
	newImg.src = imgLink;
	// img.appendChild(newImg);
	img.appendChild(newImg);
	// img.appendChild(imgLink);
}
