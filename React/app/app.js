let ageValue = window.prompt('Enter Your Age');
let underAge = React.createElement(
	'h1',
	{
		style: {
			fontFamily: 'monospace',
		},
	},
	'You are not adult , You will be Adult after',
	React.createElement(
		'span',
		{
			style: {
				color: 'red',
			},
		},
		` ${18 - ageValue} yrs`
	)
);
const normalAge = React.createElement(
	'h1',
	{
		style: {
			color: 'green',
		},
	},
	`Your are Adult`
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(ageValue >= 18 ? normalAge : underAge);

// let parent = document.createElement('div');
// let child = document.createElement('span');
// child.innerText =
// 	ageValue >= 18 ? 'Your are Adult' : `You are not adult , Your Age is : ${18 - ageValue}`;

// parent.a;
// // .appendChild(parent);
