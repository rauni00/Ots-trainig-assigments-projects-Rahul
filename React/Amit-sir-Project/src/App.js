import './App.css';
import React from 'react';
import SecondC from './High Order Component/SecondC';
// import Main from './TodoForDish/Main';
import ApiCalling from './Api Calling/Index';
function App() {
	return (
		<div style={{ display: 'flex', justifyContent: 'center', margin: 10 }}>
			<ApiCalling />
			{/* <SecondC /> */}
		</div>
	);
}

export default App;
