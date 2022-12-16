// import Wishlist from './semantic-ui/Wishlist';
import './App.css';
import MenuBar from './User-list-Project/MenuBar';
// import UseEffectImplementation001 from "./UseEffectImplementation001";
// import Index from './useContext/Index';
import TraineesComponent from './User-list-Project/TraineesComponent';
import { Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {
	return (
		// <div className="App">
		// 	<Index />
		// </div>
		<div className="App">
			<h1>OTS Solutions</h1>
			<MenuBar />
			<Routes>
				<Route path="/" element={<div>Home</div>} />
				<Route path="/services" element={<div>Services</div>} />
				<Route path="/contactus" element={<div>Contact Us</div>} />
				<Route path="/trainees" element={<TraineesComponent />} />
			</Routes>
		</div>
	);
}

export default App;
