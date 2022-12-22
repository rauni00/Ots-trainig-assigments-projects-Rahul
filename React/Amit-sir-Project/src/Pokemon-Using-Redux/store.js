import { configureStore, createSlice } from '@reduxjs/toolkit';
import { pokemonSlice } from './Reduce/getPokemonReducer';
import { pokemonDetailsSlice } from './Reduce/getPokemonDetailsReducer';

// configureStore: helps to create store => returns store object
// createSlice: helps to create reducers

export const store = configureStore({
	reducer: {
		pokemon: pokemonSlice.reducer,
		pokemonDetails: pokemonDetailsSlice.reducer,
	},
});
