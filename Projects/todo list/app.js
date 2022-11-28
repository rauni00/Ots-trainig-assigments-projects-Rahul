const arr = [];
function addItem() {
	let val = document.getElementById('todoValue');
	let value = val.value.trim();
	if (value.length) {
		let allList = document.querySelector('ul');
		let list = document.createElement('li');
		let del = document.createElement('span');
		del.innerHTML = 'Delete Item';
		del.style.color = 'red';
		del.style.marginLeft = '20px';
		del.style.cursor = 'pointer';
		list.innerHTML = value;
		list.addEventListener('click', () => {
			if (list.style.backgroundColor == 'green') {
				list.style.backgroundColor = 'white';
			} else {
				list.style.backgroundColor = 'green';
			}
		});
		del.addEventListener('click', () => {
			list.remove();
		});
		allList.appendChild(list);
		list.appendChild(del);
		arr.push(value);
		document.getElementById('todoValue').value = '';
	}
}

function deleteItem() {
	let allList = document.querySelector('ul');
	allList.innerHTML = '';
}

function persist() {
	sessionStorage.setItem('listItem', JSON.stringify(arr));
}

window.onload = () => {
	let items = JSON.parse(sessionStorage.getItem('listItem'));
	arr.push(...items);
	for (let i = 0; i < items.length; i++) {
		let allList = document.querySelector('ul');
		let list = document.createElement('li');
		list.innerText = items[i];
		allList.appendChild(list);
		let del = document.createElement('span');
		del.innerHTML = 'Delete Item';
		del.style.color = 'red';
		del.style.marginLeft = '20px';
		del.style.cursor = 'pointer';
		list.appendChild(del);
		list.addEventListener('click', () => {
			list.remove();
		});
	}
};
