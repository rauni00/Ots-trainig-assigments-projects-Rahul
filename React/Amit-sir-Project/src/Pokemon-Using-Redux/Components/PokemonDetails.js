import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pokemonDetails } from '../Reduce/getPokemonDetailsReducer';

const PokemonDetails = ({ url }) => {
	const { loading, pokemonDetail } = useSelector((state) => state.pokemonDetails.data);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(pokemonDetails(url));
		// const sprites = pokemonDetail.sprites;
		console.log(pokemonDetail);
	}, [url]);
	return (
		<div>
			{pokemonDetail.name && (
				<div>
					{/* <img src={pokemonDetail.sprites.front_default} alt="" /> */}
					Name: {pokemonDetail.name.toUpperCase()}
					<br />
					Height: {pokemonDetail.height}
					<br />
					Weight: {pokemonDetail.weight}
					{/* {pokemonDetail} */}
				</div>
			)}
		</div>
	);
};

export default PokemonDetails;
