import { configureStore, createSlice } from '@reduxjs/toolkit';

// configureStore: helps to create store => returns store object
// createSlice: helps to create reducers

const initialState = { recipe: ['wefpwieh'] };

const recipes = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addRecipes: (state = initialState, action) => {
			state.recipe = [...state.recipe, action.payload];
			console.log(state.recipe);
		},
		logout: (state) => {
			state.data = initialState;
		},
	},
});

export const { addRecipes, logout } = recipes.actions;

export const store = configureStore({
	reducer: {
		user: recipes.reducer,
	},
});
