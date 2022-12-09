import React from 'react';
import { Segment } from 'semantic-ui-react';

export default function ListInDetails({ item }) {
	const styles = {
		fontSize: 20,
		margin: 20,
		padding: 10,
	};
	return (
		<>
			{Object.keys(item).length !== 0 ? (
				<Segment>
					<div style={styles}>
						<div>
							Food Name : <span>{item.foodName}</span>
						</div>
						<div>
							Chief Name : <span>{item.chiefName}</span>
						</div>
						<div>
							Description : <span>{item.Desc}</span>
						</div>
					</div>
				</Segment>
			) : null}
		</>
	);
}
