import List from './Lists';
import SearchForm from './SearchForm';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

// search on button keyword
// On Search search button make disable
// one reset api call and set state
// short medium filter
function Index() {
	const [pokemon, setPokemon] = useState([]);
	const getPokemon = () => {
		axios.get('https://pokeapi.co/api/v2/pokemon')
			.then(({ data: { results } }) => {
				setPokemon(results);
				// console.log(data);
			})
			.catch((err) => err);
	};
	useEffect(() => {
		getPokemon();
	}, []);

	return (
		<div>
			<SearchForm />
			<List data={pokemon} />
		</div>
	);
}

export default Index;
