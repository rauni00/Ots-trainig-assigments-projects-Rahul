import React, { useState } from 'react';
import Button from './Button';
import ListItem from './ListItem';

const Form = () => {
	const [Item, setItem] = useState('');
	const [Items, setItems] = useState([]);
	const addItem = () => {
		if (Item) {
			setItems((prevValue) => [...prevValue, Item]);
			setItem('');
		}
	};
	return (
		<div>
			<input type="text" value={Item} onChange={(e) => setItem(e.target.value)} />
			<Button add={addItem} color="cyan" radius="15px" padding="10px" />
			{/* <Button add={addItem} color="rbg(200,0,155)" radius="20px" padding="30px" />
			<Button add={addItem} color="cyan" radius="15px" padding="10px" /> */}
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
