import React, { useEffect, useState } from 'react';
import { Icon, Button, Loader } from 'semantic-ui-react';

export default function ListView({ arr, details, deleteOne, edit }) {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 500);
	}, [arr]);
	return (
		<>
			{loading ? (
				<Loader active inline="centered" style={{ margin: '6%' }} />
			) : (
				<div style={{ margin: 10, marginTop: 10 }}>
					{arr.map((item) => (
						<div key={item}>
							<div>
								<ul>
									<li>
										<span
											style={{
												fontSize: 18,
												cursor: 'pointer',
												margin: 10,
											}}
											onClick={() => details(item)}
										>
											{item.foodName}
										</span>
										<span style={{ margin: 10, padding: 10 }}>
											<Button size="mini" color="blue" onClick={() => edit(item)}>
												<Icon name="edit" /> Edit
											</Button>
											<Button onClick={() => deleteOne(item.id)} color="red" size="mini">
												<Icon name="delete" /> Delete
											</Button>
											<Icon
												name="heart"
												size="large"
												style={{
													cursor: 'pointer',
													'&:hover': {
														backgroundColor: '#efefef',
													},
												}}
											/>
										</span>
									</li>
								</ul>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
}
