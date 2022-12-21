import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { data: { loading: false, pokemon: [], error: '' } };

export const pokemonData = createAsyncThunk('pokemon/pokemonData', () => {
	return axios
		.get('https://pokeapi.co/api/v2/pokemon')
		.then((res) => res.data.results)
		.catch((err) => console.log(err));
});

export const pokemon = createSlice({
	name: 'pokemon',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(pokemonData.pending, (state) => {
			state.data.loading = true;
		});
		builder.addCase(pokemonData.fulfilled, (state, action) => {
			state.data = { loading: false, pokemon: action.payload, error: '' };
		});
		builder.addCase(pokemonData.rejected, (state, action) => {
			state.data = { loading: false, pokemon: [], error: action.error.message };
		});
	},
});
