import React, { useRef } from 'react';
import { Button, Form } from 'semantic-ui-react';

export default function InputForm({ addToList }) {
	let foodName = useRef();
	let chiefName = useRef();
	let Desc = useRef();
	const addDish = () => {
		// isGirlsAllowed && isBoysAllowed && setPersonDetailsData(personDetails);
		// isBoysAllowed && setPersonDetailsData(onlyBoysAllowed);
		// !isBoysAllowed && setPersonDetailsData(onlyGirlsAllowed);

		let details = {
			foodName: foodName.current.value,
			chiefName: chiefName.current.value,
			Desc: Desc.current.value,
		};
		if (Object.keys(details) !== '') {
			addToList(details);
		}
	};
	return (
		<Form onSubmit={addDish} style={{ margin: 10 }}>
			<Form.Field>
				<input placeholder="Food Name" ref={foodName} name="foodName" />
			</Form.Field>
			<Form.Field>
				<input placeholder="Chief Name" ref={chiefName} name="chiefName" />
			</Form.Field>
			<Form.Field>
				<textarea placeholder="Description" ref={Desc} name="Desc" />
			</Form.Field>
			<Button type="submit" primary>
				Submit
			</Button>
		</Form>
	);
}
