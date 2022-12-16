import React, { useState } from 'react';
import { Table, Icon } from 'semantic-ui-react';
import './styles/style.css';
import EditDetails from './EditDetails';
const TraineesList = (props) => {
	const [forEdit, setForEdit] = useState(null);
	const [isEdit, setIsEdit] = useState(false);
	const edit = (index, trainee) => {
		setForEdit({ id: index, ...trainee });
		setIsEdit(!isEdit);
	};

	return (
		<>
			{isEdit && <EditDetails item={forEdit} cancel={() => setIsEdit(!isEdit)} />}
			{props.trainees.length > 0 && (
				<Table fixed>
					<Table.Header>
						<Table.Row positive>
							<Table.HeaderCell>Name</Table.HeaderCell>
							<Table.HeaderCell>Email</Table.HeaderCell>
							<Table.HeaderCell>Gender</Table.HeaderCell>
							<Table.HeaderCell>Actions</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					{props.trainees.length > 0 &&
						props.trainees.map((trainee, index) => {
							return (
								<Table.Body key={index} style={{}}>
									<Table.Row className="list">
										<Table.Cell style={{ fontWeight: 'bold' }}>
											{trainee.firstName} {trainee.lastName}
										</Table.Cell>
										<Table.Cell>{trainee.email}</Table.Cell>
										{trainee.gender === 'Male' ? (
											<Table.Cell>
												<Icon name="male" size="large" />
												{trainee.gender}
											</Table.Cell>
										) : (
											<Table.Cell>
												<Icon name="female" size="large" color="pink" />
												{trainee.gender}
											</Table.Cell>
										)}
										<Table.Cell>
											<Icon
												className="edit"
												name="edit"
												size="large"
												onClick={() => {
													edit(index, trainee);
												}}
											/>
											<Icon
												className="deleteItem"
												name="user delete"
												size="large"
												onClick={() => {
													props.deleteItems(index);
												}}
											/>
										</Table.Cell>
									</Table.Row>
								</Table.Body>
							);
						})}
				</Table>
			)}
			<div>{props.trainees.length === 0 && <div>No Data Found!</div>}</div>
		</>
	);
};

export default TraineesList;
