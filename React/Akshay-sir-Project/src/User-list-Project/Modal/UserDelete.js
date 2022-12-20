import React, { useContext, useState } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { EditedContext } from '../TraineesComponent';

const UserDelete = ({ trainee }) => {
	const [open, setOpen] = useState(false);
	const [edit, deleteItems] = useContext(EditedContext);

	const action = () => {
		setOpen(false);
		console.log(trainee);
		console.log(deleteItems);
		deleteItems(trainee);
	};
	return (
		<div>
			<Modal
				basic
				onClose={() => setOpen(false)}
				onOpen={() => setOpen(true)}
				open={open}
				size="small"
				trigger={<Icon className="deleteItem" name="zip" size="large" />}
			>
				<Header icon>
					<Icon name="archive" />
					Do you want to delete {trainee.firstName} {trainee.lastName} ??
				</Header>

				<Modal.Actions>
					<Button basic color="red" inverted onClick={() => setOpen(false)}>
						<Icon name="remove" /> No
					</Button>
					<Button color="green" inverted onClick={action}>
						<Icon name="checkmark" /> Yes
					</Button>
				</Modal.Actions>
			</Modal>
		</div>
	);
};

export default UserDelete;
