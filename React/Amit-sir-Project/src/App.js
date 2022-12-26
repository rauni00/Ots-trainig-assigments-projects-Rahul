import './App.css';
import React from 'react';
// import Main from './TodoForDish/Main';
import { Provider } from 'react-redux';
// import PokemonList from './Pokemon-Using-Redux/Components/PokemonList';
import { store } from './ItemAndCart/redux/store';
import { Routes, Route, Link } from 'react-router-dom';
import Product from './ItemAndCart/component/Product';
import Cart from './ItemAndCart/component/Cart';
function App() {
	return (
		<div className="App">
			<div style={{ display: 'flex', background: 'gray', padding: '4px' }}>
				<Link style={{ marginRight: '20px' }} to="/">
					Product
				</Link>
				<Link to="/cart">Cart</Link>
			</div>
			<Provider store={store}>
				<Routes>
					<Route path="/" element={<Product />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</Provider>
		</div>
	);
}

export default App;
