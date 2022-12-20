// import Wishlist from './semantic-ui/Wishlist';
import './App.css';
import MenuBar from './User-list-Project/MenuBar';
// import UseEffectImplementation001 from "./UseEffectImplementation001";
// import Index from './useContext/Index';
import TraineesComponent from './User-list-Project/TraineesComponent';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import logo from './User-list-Project/image/logo.png';
import { Image } from 'semantic-ui-react';
import ContactUs from './User-list-Project/Contact Us/ContactUs';

function App() {
	return (
		// <div className="App">
		// 	<Index />
		// </div>
		<div className="App">
			<div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem' }}>
				<Image src={logo} size="large" />
				<MenuBar />
			</div>
			<Routes>
				<Route path="/" element={<div>Home</div>} />
				<Route path="/services" element={<div>Services</div>} />
				<Route path="/contactus" element={<ContactUs />} />
				<Route path="/trainees" element={<TraineesComponent />} />
			</Routes>
		</div>
	);
}

export default App;
