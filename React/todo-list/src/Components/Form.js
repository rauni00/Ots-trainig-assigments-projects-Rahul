import React, { useState } from 'react';
import ListItem from './ListItem';

const Form = () => {
	const [Item, setItem] = useState('');
	const [Items, setItems] = useState([]);
	const addItem = () => {
		setItems((prevArray) => [...prevArray, Item]);
	};
	return (
		<div>
			<input type="text" name="item" onChange={(e) => setItem(e.target.value)} />
			{/* <button type="submit" onClick={addItem}> */}
			<input type="button" onClick={addItem} value="Submit" />

			<ListItem arr={Items} />
		</div>
	);
};

export default Form;

// import React from 'react';

// class StateComponent extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			firstName: 'Rahul',
// 			lastName: 'Rauniyar',
// 			country: props.country,
// 		};
// 	}

// 	render() {
// 		return (
// 			<div>
// 				MY name is {this.state.firstName} {this.state.lastName} {this.state.country}
// 			</div>
// 		);
// 	}
// }

// export default StateComponent;
