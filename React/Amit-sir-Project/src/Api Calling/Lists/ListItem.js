import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { HeightContext } from '../Index';
export default function ListItem({ item }) {
	const [details, setDetails] = useState(null);
	const heightValue = useContext(HeightContext);
	const getPokemonDetail = async () => {
		try {
			const { data } = await axios.get(item.url);
			heightValue(data);
			let weight = data.weight;
			let height = data.height;
			setDetails({ weight, height });
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPokemonDetail();
	}, [item]);

	// return
	return (
		<>
			<li
				style={{
					listStyle: 'none',
					width: '200px',
					border: '1px solid',
					margin: '4px',
				}}
			>
				{}
				<div>Name: {item.name.toUpperCase()}</div>
				<div>Weight: {details ? details.weight : 'ni mila'}</div>
				<div>Height: {details ? details.height : 'ni mila'}</div>
			</li>
		</>
	);
}
