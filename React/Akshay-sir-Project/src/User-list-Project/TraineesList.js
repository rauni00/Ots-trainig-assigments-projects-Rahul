import React from 'react';
import { Table, Icon, Button } from 'semantic-ui-react';
import './styles/style.css';
import UserDelete from './Modal/UserDelete';
import AddEditUser from './Modal/AddEditUser';
const TraineesList = ({ trainees }) => {
	return (
		<>
			<Button size="small">
				<AddEditUser name="add" size="large" btnName="Add User" title="Add User" />
				Add User
			</Button>
			{trainees.length > 0 && (
				<Table fixed>
					<Table.Header>
						<Table.Row positive>
							<Table.HeaderCell>Name</Table.HeaderCell>
							<Table.HeaderCell>Email</Table.HeaderCell>
							<Table.HeaderCell>Gender</Table.HeaderCell>
							<Table.HeaderCell>Actions</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					{trainees.length > 0 &&
						trainees.map((trainee, index) => {
							return (
								<Table.Body key={index}>
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
											<div style={{ display: 'flex', justifyContent: 'flex-start' }}>
												<AddEditUser
													item={{ index: index, ...trainee }}
													btnName="Update"
													name="edit"
													size="large"
													title="Edit User"
												/>
												<UserDelete trainee={{ index: index, ...trainee }} />
											</div>
										</Table.Cell>
									</Table.Row>
								</Table.Body>
							);
						})}
				</Table>
			)}
			<div>{trainees.length === 0 && <div>No Data Found!</div>}</div>
		</>
	);
};

export default TraineesList;
