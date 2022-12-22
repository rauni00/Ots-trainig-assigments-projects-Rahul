import React, { useState } from 'react';
import { pokemonData } from '../Reduce/getPokemonReducer';
import { useDispatch, useSelector } from 'react-redux';
import PokemonDetails from './PokemonDetails';

const PokemonList = () => {
	const [detailsUrl, setDetailsUrl] = useState('');
	const { loading, pokemon } = useSelector((state) => state.pokemon.data);
	const dispatch = useDispatch();

	const getData = () => {
		dispatch(pokemonData('https://pokeapi.co/api/v2/pokemon/'));
	};

	return (
		<div>
			<button onClick={() => getData()}>Get Data</button>
			<ul>
				{loading && pokemon.length > 0 ? (
					<div>Loading....</div>
				) : (
					pokemon.map((item, i) => (
						<li
							style={{ listStyle: 'none', border: 2, borderColor: 'black', cursor: 'pointer' }}
							key={i}
							onClick={() => setDetailsUrl(item.url)}
						>
							{item.name}
						</li>
					))
				)}
			</ul>
			<PokemonDetails url={detailsUrl} />
		</div>
	);
};

export default PokemonList;
