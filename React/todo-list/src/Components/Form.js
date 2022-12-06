import React from 'react';
import ListItem from './ListItem';

const Form = () => {
	let itemValue = '';
	const addItem = (e) => {
		e.preventDefault();
		const form = new FormData(e.target);
		const item = form.get('item');
		itemValue = item;
	};
	return (
		<div>
			<form onSubmit={addItem}>
				<input type="text" name="item" />
				<button type="submit">ADD</button>
			</form>
			<ListItem item={itemValue} />
		</div>
	);
};

export default Form;
