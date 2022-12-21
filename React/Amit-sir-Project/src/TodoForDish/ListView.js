import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Icon, Button, Loader } from 'semantic-ui-react';

export default function ListView({ arr, details, deleteOne, edit }) {
	const recipe = useSelector((state) => state.user.data);
	const [recipesList, setRecipesList] = useState(null);
	// const [loading, setLoading] = useState(false);
	useEffect(() => {
		// setRecipesList((pre) => [...pre, recipe.recipe]);
		console.log(recipe);
		// console.log(recipesList, 'r2yu2jb');
		// setLoading(true);
		// setTimeout(() => {
		// 	setLoading(false);
		// 	console.log(recipesList);
		// }, 500);
	}, [recipe]);
	return (
		<>
			{/* {loading ? (
				<Loader active inline="centered" style={{ margin: '6%' }} />
			) : ( */}
			<div style={{ margin: 10, marginTop: 10 }}>
				{!recipe === undefined &&
					recipesList.recipe.map((item) => (
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
			{/* )} */}
		</>
	);
}
