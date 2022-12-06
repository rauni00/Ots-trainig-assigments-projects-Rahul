import React from 'react';
const ListItem = (props) => {
	const arr = [];
	arr.push(props.item);
	return (
		<div>
			<ul>
				{arr.map((item) => (
					<li>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default ListItem;
