import './App.css';
import React from 'react';
import Main from './TodoForDish/Main';
import { store } from './TodoForDish/store';
import { Provider } from 'react-redux';
function App() {
	return (
		<Provider store={store}>
			<Main />
		</Provider>
	);
}

export default App;
