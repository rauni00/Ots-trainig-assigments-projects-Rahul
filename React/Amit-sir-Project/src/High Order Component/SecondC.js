import React from 'react';
import HigherComponent from './HigherComponent';
const SecondC = ({ counter }) => {
	return <div>{counter}</div>;
};

export default HigherComponent(SecondC);
