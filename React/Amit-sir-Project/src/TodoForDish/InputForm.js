import React, { useEffect, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

export default function InputForm({ addToList, btnName, oneItem, cancel, editTitle }) {
	const [list, setList] = useState({
		foodName: '',
		chiefName: '',
		Desc: '',
		id: '',
	});

	useEffect(() => {
		setList({ ...oneItem });
	}, [oneItem]);

	const change = (e) => {
		const { name, value } = e.target;
		setList((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const onSubmit = () => {
		addToList(list);
		setList({
			foodName: '',
			chiefName: '',
			Desc: '',
		});
	};

	return (
		<Form onSubmit={onSubmit} style={{ margin: 2 }}>
			{editTitle ? <h1>{editTitle}</h1> : <h1>Add Recipes</h1>}
			<Form.Field>
				<input placeholder="Food Name" value={list.foodName} name="foodName" onChange={change} required autoComplete="off" />
			</Form.Field>
			<Form.Field>
				<input placeholder="Chief Name" name="chiefName" value={list.chiefName} onChange={change} required autoComplete="off" />
			</Form.Field>
			<Form.Field>
				<textarea placeholder="Description" name="Desc" value={list.Desc} onChange={change} required autoComplete="off" />
			</Form.Field>
			<Button type="submit" primary>
				{btnName}
			</Button>
			{oneItem && (
				<Button
					type="button"
					color="red"
					onClick={() => {
						cancel();
						setList({
							foodName: '',
							chiefName: '',
							Desc: '',
						});
					}}
				>
					Cancel
				</Button>
			)}
		</Form>
	);
}
