import List from './Lists';
import SearchForm from './SearchForm';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Pagination } from 'semantic-ui-react';

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
	const filterHeight = (e) => {
		let height = e.target.value;
		// if (height === 'Medium') {
		// 	const filter = pokemon.filter((item) => {
		// 		if (item.height > 10) {
		// 			return true;
		// 		} else return false;
		// 	});
		// 	console.log(filter);
		// 	// setPokemon(filter);
		// }
	};

	const search = (val) => {
		const newPokemon = pokemon.filter((pokemon) => pokemon.name.includes(val.toLowerCase()));
		setPokemon(newPokemon);
	};
	const resetData = () => {
		getPokemon();
	};
	return (
		<div>
			<SearchForm searchVal={search} reset={resetData} />
			<select onChange={filterHeight}>
				<option value="Min">Min</option>
				<option value="Medium">Medium</option>
				<option value="Max">Max</option>
			</select>
			<List data={pokemon} />
			<Pagination defaultActivePage={1} firstItem={null} lastItem={null} pointing secondary totalPages={3} />
		</div>
	);
}

export default Index;
