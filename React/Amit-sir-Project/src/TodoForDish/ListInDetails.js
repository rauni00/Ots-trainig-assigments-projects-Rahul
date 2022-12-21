import React, { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';

export default function ListInDetails({ item }) {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 500);
	}, [item]);

	const styles = {
		fontSize: 20,
		margin: 20,
		padding: 10,
	};
	return (
		<>
			{loading ? (
				<Loader active inline style={{ margin: '8%' }} />
			) : (
				<div style={styles}>
					<div>
						Food Name : <span style={{ color: 'green' }}>{item.foodName}</span>
					</div>
					<div>
						Chief Name : <span style={{ color: 'green' }}>{item.chiefName}</span>
					</div>
					<div>
						Description : <span style={{ color: 'green' }}>{item.Desc}</span>
					</div>
				</div>
			)}
		</>
	);
}
