import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Modal, Icon } from 'semantic-ui-react';
import { EditedContext } from '../TraineesComponent';
const AddEditUser = ({ item, btnName, name, size, title }) => {
	const [open, setOpen] = useState(false);
	const [data, setData] = useState({ firstName: '', lastName: '', email: '', gender: '', id: null });
	const [edited, deleteItem] = useContext(EditedContext);
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
	const submit = () => {
		setOpen(false);
		edited(data);
	};
	return (
		<div>
			<Modal
				size="tiny"
				onClose={() => setOpen(false)}
				onOpen={() => setOpen(true)}
				open={open}
				trigger={<Icon name={name} size={size} />}
			>
				<Modal.Header>{title}</Modal.Header>
				<Modal.Content image>
					<Modal.Description>
						<Form size="small">
							<label>First Name</label>
							<input placeholder="First Name" name="firstName" value={data.firstName} onChange={change} required />
							<br />
							<br />
							<label>Last Name</label>
							<input placeholder="Last Name" name="lastName" value={data.lastName} onChange={change} required />
							<br />
							<br />
							<label>Email</label>
							{/* {title === 'Add User'} */}
							<input
								placeholder="Email"
								name="Email"
								value={data.email}
								onChange={change}
								required
								disabled={title !== 'Add User' ? true : false}
							/>
							<br />
							<br />
							<select name="gender" value={data.gender} onChange={change} required>
								<option value="Select Gender"> Select Gender</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
								<option value="Other">Other</option>
							</select>
							<br />
						</Form>
					</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
					<Button onClick={submit} positive>
						{btnName}
					</Button>
					<Button color="red" onClick={() => setOpen(false)}>
						Cancel
					</Button>
				</Modal.Actions>
			</Modal>
			{/* <Segment style={{ width: '25%' }} size="mini"> */}

			{/* </Segment> */}
		</div>
	);
};

export default AddEditUser;
