import React, { useEffect, useState } from 'react';
import PersonComponent from './PersonComponent';
import { Dimmer, Loader } from 'semantic-ui-react';

const personDetails = [
	{
		id: 1,
		firstName: 'Akshay',
		lastName: 'Khurana',
		age: 27,
		hometown: 'Meerut',
		gender: 'male',
	},
	{
		id: 2,
		firstName: 'Saurabh',
		lastName: 'Singh',
		age: 20,
		hometown: 'Gurgaon',
		gender: 'male',
	},
	{
		id: 3,
		firstName: 'Manisha',
		lastName: 'More',
		age: 20,
		hometown: 'Pune',
		gender: 'female',
	},
	{
		id: 4,
		firstName: 'Rahul',
		lastName: 'Rauniyar',
		age: 20,
		hometown: 'Meerut',
		gender: 'male',
	},
	{
		id: 5,
		firstName: 'Amit',
		lastName: 'Sharma',
		age: 27,
		hometown: 'Meerut',
		gender: 'male',
	},
];

const onlyBoysAllowed = personDetails.filter((currentIteration) => {
	if (currentIteration.gender === 'female') {
		return false;
	}
	return true;
});

const onlyGirlsAllowed = personDetails.filter((currentIteration) => {
	if (currentIteration.gender === 'male') {
		return false;
	}
	return true;
});

function UseEffectImplementation001() {
	const [personDetailsData, setPersonDetailsData] = useState([]);
	const [isGirlsAllowed, setIsGirlsAllowed] = useState(true);
	const [isBoysAllowed, setIsBoysAllowed] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	// This will be called on the first mount and when isGirlsAllowed & isBoysAllowed State Changes
	useEffect(() => {
		if (isBoysAllowed && isGirlsAllowed) {
			setIsLoading(true);
			setTimeout(() => {
				setIsLoading(false);
				setPersonDetailsData(personDetails);
			}, 800);
		} else {
			if (isBoysAllowed) {
				setIsLoading(true);
				setTimeout(() => {
					setPersonDetailsData(onlyBoysAllowed);
					setIsLoading(false);
				}, 800);
			} else if (isGirlsAllowed) {
				setIsLoading(true);
				setTimeout(() => {
					setPersonDetailsData(onlyGirlsAllowed);
					setIsLoading(false);
				}, 800);
			} else {
				setIsLoading(true);
				setTimeout(() => {
					setPersonDetailsData([]);
					setIsLoading(false);
				}, 500);
			}
		}
	}, [isGirlsAllowed, isBoysAllowed]);

	return (
		<div>
			{isLoading ? (
				<Dimmer active>
					<Loader size="tiny">Loading</Loader>
				</Dimmer>
			) : (
				<>
					{personDetailsData.length > 0 &&
						personDetailsData.map((currentIteration) => {
							return (
								<PersonComponent
									firstName={currentIteration.firstName}
									lastName={currentIteration.lastName}
									age={currentIteration.age}
									hometown={currentIteration.hometown}
									key={currentIteration.id}
								/>
							);
						})}
					{personDetailsData.length === 0 && <div>No one is allowed</div>}
					<div>
						<button style={{ margin: '1rem' }} onClick={() => setIsGirlsAllowed(false)} disabled={!isGirlsAllowed}>
							Remove Girls
						</button>
						<button style={{ margin: '1rem' }} onClick={() => setIsBoysAllowed(false)} disabled={!isBoysAllowed}>
							Remove Boys
						</button>
					</div>
					<div>
						<button style={{ margin: '1rem' }} onClick={() => setIsGirlsAllowed(true)} disabled={isGirlsAllowed}>
							Add Girls
						</button>
						<button style={{ margin: '1rem' }} onClick={() => setIsBoysAllowed(true)} disabled={isBoysAllowed}>
							Add Boys
						</button>
					</div>
				</>
			)}
		</div>
	);
}

export default UseEffectImplementation001;
