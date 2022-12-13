import React from 'react';
import { Segment, Icon, Button } from 'semantic-ui-react';

export default function ListView({ arr, details, deleteOne, edit }) {
	return (
		<>
			{arr.length !== 0 ? (
				<Segment>
					<div style={{ margin: 15, marginTop: 10 }}>
						<h3 style={{ color: 'green' }}>
							FOOD NAME <Icon name="food" />
						</h3>
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
												<Icon name="heart outlet" size="large" />
											</span>
										</li>
									</ul>
								</div>
							</div>
						))}
					</div>
				</Segment>
			) : null}
		</>
	);
}
