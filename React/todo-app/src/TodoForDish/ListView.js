import React from 'react';

export default function ListView({ arr, details }) {
	return (
		<div style={{ margin: 15, marginTop: 10 }}>
			<h3 style={{ color: 'green' }}>FOOD NAME </h3>
			{arr.map((item) => (
				<div key={item}>
					<div
						style={{ fontSize: 18, cursor: 'pointer' }}
						onClick={() => details(item)}
					>
						<ul>
							<li>{item.foodName}</li>
						</ul>
					</div>
				</div>
			))}
		</div>
	);
}
