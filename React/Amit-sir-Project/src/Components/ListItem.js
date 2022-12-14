import React from 'react';
const ListItem = (props) => {
	return (
		<div>
			<ul>
				{props.arr.map((item, i) => (
					<li key={i}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default ListItem;
