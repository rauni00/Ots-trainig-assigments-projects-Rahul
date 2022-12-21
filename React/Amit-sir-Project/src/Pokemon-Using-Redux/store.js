import { configureStore, createSlice } from '@reduxjs/toolkit';
import { getPokemonReducer } from './Reduce/getPokemonReducer';
// configureStore: helps to create store => returns store object
// createSlice: helps to create reducers

const initialState = {};

const recipes = createSlice({
	name: 'user',
	initialState,
	reducers: {},
});

export const { addRecipes, logout } = recipes.actions;

export const store = configureStore({
	reducer: {
		pokemon: getPokemonReducer,
	},
});
