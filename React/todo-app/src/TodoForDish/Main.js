import React, { useState } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import InputForm from './InputForm';
import ListInDetails from './ListInDetails';
import ListView from './ListView';

export default function Main() {
	const [arr, setArr] = useState([]);
	const [item, setItem] = useState({});
	const add = (item) => {
		// if (!item) {
		setArr((pre) => [...pre, item]);
		// }
	};
	const detailsView = (oneItem) => {
		setItem({ ...oneItem });
	};
	return (
		<Grid divided="vertically">
			<Grid.Row columns={2}>
				<Grid.Column>
					<Grid.Row>
						<Segment>
							<InputForm addToList={add} />
						</Segment>
					</Grid.Row>
					<Grid.Row>
						<ListView arr={arr} details={detailsView} />
					</Grid.Row>
				</Grid.Column>
				<Grid.Column>
					<ListInDetails item={item} />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
}
