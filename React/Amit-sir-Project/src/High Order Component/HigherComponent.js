import React, { useState } from 'react';

export default function HigherComponent(OriginalComponent) {
	const NewComponent = () => {
		const [counter, setCounter] = useState(5);
		return (
			<div>
				<div>I am from Hoc</div>
				<OriginalComponent counter={counter} />
			</div>
		);
	};
	return NewComponent;
}
// high order component is fnc
// it take component as arg
// it create a new component bt using original component that we are getting from parameter of HOC
// returns that new component
