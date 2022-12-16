import React, { createContext, useEffect, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import TraineesComponent from './TraineesComponent';
export const editedContext = createContext();
const EditDetails = ({ item }) => {
	const [data, setData] = useState({ firstName: '', lastName: '', gender: '', id: null });
	useEffect(() => {
		setData({ ...item });
	}, [item]);

	const change = (e) => {
		const { name, value } = e.target;
		setData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	const submit = (e) => {
		e.preventDefault();
	};
	return (
		<div>
			<editedContext.Provider value={data}>
				<TraineesComponent />
			</editedContext.Provider>
			<Segment style={{ width: '25%' }} size="mini">
				<h3>Edit Details</h3>
				<Form size="small" onSubmit={submit}>
					<label>First Name</label>
					<input placeholder="First Name" name="firstName" value={data.firstName} onChange={change} />
					<label>Last Name</label>
					<input placeholder="Last Name" name="lastName" value={data.lastName} onChange={change} />
					<br />
					<br />
					<select name="gender" value={data.gender} onChange={change}>
						<option value="Select Gender"> Select Gender</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
						<option value="Other">Other</option>
					</select>

					<br />
					<Button type="submit">Submit</Button>
				</Form>
			</Segment>
		</div>
	);
};

export default EditDetails;
