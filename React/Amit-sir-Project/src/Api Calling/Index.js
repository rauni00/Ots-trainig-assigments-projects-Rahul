import List from './Lists';
import SearchForm from './SearchForm';
import axios from 'axios';
import React, { useEffect, useState, createContext } from 'react';
import { Pagination } from 'semantic-ui-react';
export const HeightContext = createContext();

// search on button keyword
// On Search search button make disable
// one reset api call and set state
// short medium filter
function Index() {
	const [pokemon, setPokemon] = useState([]);
	const [allHeight, setAllHeight] = useState([]);
	const [filteredHeight, setFilteredHeight] = useState([]);
	const [heightType, setHeightType] = useState('');

	const getPokemon = () => {
		axios.get('https://pokeapi.co/api/v2/pokemon')
			.then(({ data: { results } }) => {
				setPokemon(results);
			})
			.catch((err) => err);
	};
	useEffect(() => {
		getPokemon();
	}, []);

	useEffect(() => {
		if (heightType === 'Min') {
			const minHeight = allHeight.filter((item) => {
				if (item.height <= 10) {
					return true;
				} else return false;
			});
			console.log(minHeight);
			setFilteredHeight(minHeight);
			// setPokemon(minHeight);
			setHeightType('');
		} else if (heightType === 'Medium') {
			const mediumHeight = allHeight.filter((item) => {
				if (item.height >= 10 && item.height <= 15) {
					return true;
				} else return false;
			});
			setFilteredHeight(mediumHeight);
			// setPokemon(mediumHeight);

			setHeightType('');
		} else if (heightType === 'Max') {
			const maxHeight = allHeight.filter((item) => {
				if (item.height > 15) {
					return true;
				} else return false;
			});
			setFilteredHeight(maxHeight);
			// setPokemon(maxHeight);
			setHeightType('');
		} else {
			// setFilteredHeight(pokemon);
			// setPokemon(pokemon);
		}
	}, [heightType]);

	const getHeight = (height) => {
		if (height.length !== 0) {
			setAllHeight((pre) => [...pre, height]);
		}
	};

	// useEffect(() => {}, [getHeight]);

	const search = (val) => {
		const newPokemon = pokemon.filter((pokemon) => pokemon.name.includes(val.toLowerCase()));
		setPokemon(newPokemon);
	};
	const resetData = () => {
		getPokemon();
	};
	return (
		<div>
			{pokemon.length}
			<SearchForm searchVal={search} reset={resetData} />
			<select
				onChange={(e) => setHeightType(e.target.value)}
				defaultValue="Select"
				style={{ width: 'auto', height: 36, font: 20 }}
			>
				<option value="Select" disabled>
					Select the Height
				</option>
				<option value="Min">Min</option>
				<option value="Medium">Medium</option>
				<option value="Max">Max</option>
			</select>
			<HeightContext.Provider value={getHeight}>
				{/* <List data={heightType === '' ? pokemon : filteredHeight} /> */}
				<List data={pokemon} />
			</HeightContext.Provider>
			<Pagination defaultActivePage={1} firstItem={null} lastItem={null} pointing secondary totalPages={3} />
		</div>
		// 8318957893  175
	);
}

export default Index;
