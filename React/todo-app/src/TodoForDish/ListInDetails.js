import React from 'react';

export default function ListInDetails({ item }) {
	return (
		<div>
			<div>
				<span>Food Name : </span> {item.foodName}
			</div>
			<div>
				<span>Chief Name : </span>
				{item.chiefName}
			</div>
			<div>
				<span>Description : </span>
				{item.Desc}
			</div>
		</div>
	);
}
