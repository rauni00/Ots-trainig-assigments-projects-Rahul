import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { data: { loading: false, pokemonDetail: {}, error: '' } };

export const pokemonDetails = createAsyncThunk('Details/pokemonDetails', (url) => {
	return axios
		.get(url)
		.then((res) => res.data)
		.catch((err) => console.log(err));
});

export const pokemonDetailsSlice = createSlice({
	name: 'Details',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(pokemonDetails.pending, (state) => {
			state.data.loading = true;
		});
		builder.addCase(pokemonDetails.fulfilled, (state, action) => {
			state.data.pokemonDetail = action.payload;
			// state.data = { loading: false, pokemon: action.payload, error: '' };
		});
		builder.addCase(pokemonDetails.rejected, (state, action) => {
			state.data = { loading: false, pokemon: [], error: action.error.message };
		});
	},
});
