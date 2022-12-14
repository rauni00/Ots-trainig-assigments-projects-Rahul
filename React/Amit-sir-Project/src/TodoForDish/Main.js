import React, { useState } from 'react';
import { Grid, Segment, Icon } from 'semantic-ui-react';
import InputForm from './InputForm';
import ListInDetails from './ListInDetails';
import ListView from './ListView';
import { v4 as uuidv4 } from 'uuid';
export default function Main() {
	const [foodItems, setFoodItems] = useState([]);
	const [item, setItem] = useState({});
	const [forEdit, setForEdit] = useState(null);
	const [editForm, setEditForm] = useState(false);

	const add = (item) => {
		let data = { ...item, id: uuidv4() };
		setFoodItems((pre) => [...pre, data]);
	};

	const detailsView = (oneItem) => {
		setItem({ ...oneItem });
	};

	const deleteItem = (id) => {
		const filterArray = foodItems.filter((curr) => {
			if (curr.id === id) {
				return false;
			} else return true;
		});
		setFoodItems(filterArray);
	};

	const editItem = (item) => {
		const editedArray = foodItems.map((curr) => {
			if (curr.id === item.id) {
				return { ...item };
			}
			return curr;
		});
		setFoodItems(editedArray);
		setEditForm(!editForm);
	};

	const editView = (item) => {
		setEditForm(true);
		setForEdit({ ...item });
	};

	return (
		<Grid divided="vertically">
			<Grid.Row columns={2}>
				<Grid.Column>
					<Grid.Row>
						<Segment>
							{editForm ? (
								<InputForm
									editTitle="Edit Recipes"
									addToList={editItem}
									btnName="Update"
									oneItem={forEdit}
									cancel={() => setEditForm(false)}
								/>
							) : (
								<InputForm addToList={add} btnName="Submit" />
							)}
						</Segment>
					</Grid.Row>
					<Grid.Row>
						<Segment>
							<h3 style={{ color: 'green' }}>
								FOOD NAME <Icon name="food" />
							</h3>
							<ListView arr={foodItems} details={detailsView} deleteOne={deleteItem} edit={editView} />
						</Segment>
					</Grid.Row>
				</Grid.Column>
				<Grid.Column>
					<Segment>
						<h1>
							<Icon name="food" /> Food Description
						</h1>
						<ListInDetails item={item} />
					</Segment>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
}
