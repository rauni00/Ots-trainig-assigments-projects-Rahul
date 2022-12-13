import React, { useEffect, useState } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import InputForm from './InputForm';
import ListInDetails from './ListInDetails';
import ListView from './ListView';
import { v4 as uuidv4 } from 'uuid';

export default function Main() {
	const [arr, setArr] = useState([]);
	const [item, setItem] = useState({});
	const [forEdit, setForEdit] = useState({});
	const [edit, setEdit] = useState(false);

	useEffect(() => {}, []);
	const add = (item) => {
		let data = { ...item, id: uuidv4() };
		setArr((pre) => [...pre, data]);
	};
	const editItem = (item) => {
		const editedArray = arr.map((curr) => {
			if (curr.id === item.id) {
				return { ...item };
			}
			return curr;
		});
		setArr(editedArray);
		setEdit(!edit);
	};

	const detailsView = (oneItem) => {
		setItem({ ...oneItem });
	};

	const deleteItem = (id) => {
		const filterArray = arr.filter((curr) => {
			if (curr.id === id) {
				return false;
			} else return true;
		});
		setArr(filterArray);
	};

	const editView = (item) => {
		setEdit(true);
		setForEdit({ ...item });
	};
	return (
		<Grid divided="vertically">
			<Grid.Row columns={2}>
				<Grid.Column>
					<Grid.Row>
						<Segment>
							{edit ? (
								<InputForm addToList={editItem} btnName="Update" oneItem={forEdit} />
							) : (
								<InputForm addToList={add} btnName="Submit" />
							)}
						</Segment>
					</Grid.Row>
					<Grid.Row>
						<ListView arr={arr} details={detailsView} deleteOne={deleteItem} edit={editView} />
					</Grid.Row>
				</Grid.Column>
				<Grid.Column>
					<ListInDetails item={item} />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
}
