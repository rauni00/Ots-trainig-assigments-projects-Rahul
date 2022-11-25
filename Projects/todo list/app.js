let button = document.getElementById('add');
const arr = [];
button.addEventListener('click', () => {
	let val = document.getElementById('todoValue');
	let value = val.value;
	if (value.length) {
		let allList = document.querySelector('ul');
		let list = document.createElement('li');
		list.innerText = value;
		arr.push(value);
		// JSON.stringify(person);
		localStorage.setItem('listItem', JSON.stringify(arr));
		allList.appendChild(list);
		document.getElementById('todoValue').value = '';
	}
});
// window.addEventListener('pa');
let button2 = document.getElementById('delete');
button2.addEventListener('click', () => {
	location.reload();

	let allList = document.querySelector('ul');
	allList.innerHTML = '';
});

let button3 = document.getElementById('session');
button3.addEventListener('click', () => {
	sessionStorage.setItem('todoList', JSON.stringify(arr));
});

window.addEventListener('load', () => {
	let items = JSON.parse(localStorage.getItem('listItem'));
	arr.push(...items);
	for (let i = 0; i < items.length; i++) {
		let allList = document.querySelector('ul');
		let list = document.createElement('li');
		list.innerText = items[i];
		allList.appendChild(list);
	}
});

console.log(arr);
