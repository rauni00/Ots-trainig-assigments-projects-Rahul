import React, { useContext, useEffect, useState } from 'react';
import { Header, Input, Button, Dropdown } from 'semantic-ui-react';
import TraineesList from './TraineesList';
import UsersData from './UsersData';
import { editedContext } from './EditDetails';
const TraineesComponent = () => {
	const edited = useContext(editedContext);
	const [searchTerm, setSearchTerm] = useState('');
	const [name, setName] = useState('');
	const [traineesList, setTraineesList] = useState([]);
	const [searchedTraineesList, setSearchedTraineesList] = useState([]);

	useEffect(() => {
		console.log(edited);
	}, [edited]);

	const options = [
		{
			key: 'ascending',
			text: 'Ascending Order',
			value: 'ascending',
		},
		{
			key: 'descending',
			text: 'Descending Order',
			value: 'descending',
		},
	];

	useEffect(() => {
		setTraineesList(UsersData);
	}, []);

	useEffect(() => {
		if (searchTerm !== '') {
			const filteredData = UsersData.filter((trainee) => trainee.firstName.toLowerCase().includes(searchTerm.toLowerCase()));
			setSearchedTraineesList(filteredData);
		}
	}, [searchTerm]);
	useEffect(() => {
		if (name === 'ascending') {
			let ascending = UsersData.sort((a, b) => {
				let fa = a.firstName;
				let fb = b.firstName;
				if (fa < fb) {
					return -1;
				}
				if (fa > fb) {
					return 1;
				}
				return 0;
			});
			setSearchedTraineesList(ascending);
			setName('');
		} else if (name === 'descending') {
			let descending = UsersData.sort((a, b) => {
				let fa = a.firstName;
				let fb = b.firstName;
				if (fa < fb) {
					return 1;
				}
				if (fa > fb) {
					return -1;
				}
				return 0;
			});
			setSearchedTraineesList(descending);
			setName('');
		} else {
			setSearchedTraineesList(UsersData);
		}
	}, [name]);

	const deleteItems = (index) => {
		const deleteItem = searchedTraineesList.filter((item, i) => {
			if (index === i) {
				return false;
			}
			return true;
		});
		setSearchedTraineesList(deleteItem);
		setTraineesList(deleteItem);
	};

	return (
		<>
			<Header as="h1">Trainees</Header>
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-end',
					marginRight: '1rem',
				}}
			>
				<Input
					style={{ width: '25rem' }}
					icon={{ name: 'search', circular: true, link: true }}
					placeholder="Search Name"
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<div>
					<Button.Group color="blue" style={{ marginLeft: '1rem' }}>
						<Button>Sort</Button>
						<Dropdown
							className="button icon"
							floating
							options={options}
							onChange={(e, { value }) => {
								setName(value);
							}}
							trigger={<></>}
						/>
					</Button.Group>
				</div>
			</div>

			<div style={{ margin: '1rem' }}>
				<TraineesList deleteItems={deleteItems} trainees={searchTerm === '' ? traineesList : searchedTraineesList} />
			</div>
		</>
	);
};

export default TraineesComponent;