import React from 'react';
import { Button, Form } from 'semantic-ui-react';

export default function InputForm({ addToList }) {
	const addDish = (e) => {
		let data = new FormData(e.target);
		const details = {
			foodName: data.get('foodName'),
			chiefName: data.get('chiefName'),
			Desc: data.get('Desc'),
		};
		addToList(details);
	};
	return (
		<Form onSubmit={addDish} style={{ margin: 10 }}>
			<Form.Field>
				<input placeholder="Food Name" name="foodName" />
			</Form.Field>
			<Form.Field>
				<input placeholder="Chief Name" name="chiefName" />
			</Form.Field>
			<Form.Field>
				<textarea placeholder="Description" name="Desc" />
			</Form.Field>
			<Button type="submit">Submit</Button>
		</Form>
	);
}
