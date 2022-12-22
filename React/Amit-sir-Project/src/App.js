import './App.css';
import React from 'react';
// import Main from './TodoForDish/Main';
import { Provider } from 'react-redux';
import PokemonList from './Pokemon-Using-Redux/Components/PokemonList';
import { store } from './Pokemon-Using-Redux/store';
function App() {
	return (
		<Provider store={store}>
			<PokemonList />
		</Provider>
	);
}

export default App;
