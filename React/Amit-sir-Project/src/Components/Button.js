import React from 'react';

const Button = (props) => {
	return (
		<>
			<button
				style={{
					color: props.color,
					borderRadius: props.radius,
					padding: props.padding,
				}}
				type="button"
				onClick={props.add}
			>
				Submit
			</button>
		</>
	);
};
Button.defaultProps = {
	color: 'red',
	radius: '5px',
	padding: '4px',
};

export default Button;
