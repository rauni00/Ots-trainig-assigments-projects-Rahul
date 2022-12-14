import React from 'react';

class Demo extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: 'RAHUL', color: 'red' };
	}
	static getDerivedStateFromProps(props, state) {
		return { color: 'green' };
	}
	// componentDidMount() {
	// 	setTimeout(() => {
	// 		this.setState({ name: 'RAUNI', color: 'green' });
	// 	}, 3000);
	// }

	render() {
		const { color, name } = this.state;
		return <div style={{ fontSize: 50, color: color }}>{name}</div>;
	}
}

export default Demo;
