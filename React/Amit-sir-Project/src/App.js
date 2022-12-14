import './App.css';
import React from 'react';
// import Main from './TodoForDish/Main';
import ApiCalling from './Api Calling/Index';
function App() {
	return (
		<div style={{ display: 'flex', justifyContent: 'center', margin: 10 }}>
			{/* <Main /> */}
			<ApiCalling />
		</div>
	);
}

export default App;
