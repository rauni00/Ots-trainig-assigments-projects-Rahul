import { Button, Checkbox, Form, Modal } from "semantic-ui-react";
import React, { useState } from "react";
import axios from "axios";

const AddEditTodo = ({ setTodos }) => {
	const [open, setOpen] = useState(false);
	const [error, setError] = useState(false);
	const [items, setItems] = useState({
		description: "",
		completed: false,
	});

	const addTodo = async () => {
		if (items.description.trim() === "") {
			setError(true);
		} else {
			const response = await axios.post("http://localhost:3001/todos/add", items);
			setTodos((pre) => [...pre, response.data]);
			setOpen(false);
			setItems({ description: "", completed: false });
		}
	};
	return (
		<Modal
			size="tiny"
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			trigger={
				<Button basic color="green">
					Add
				</Button>
			}
		>
			<Modal.Header>Add</Modal.Header>
			<Modal.Content>
				<Modal.Description>
					<Form onSubmit={addTodo}>
						{error && <div style={{ color: "red" }}>Description is required</div>}
						<Form.Field>
							<label>Description</label>
							<Form.Input
								placeholder="Description"
								value={items.description}
								onChange={(e) => {
									if (e.target.value.trim() !== 0) {
										setItems((pre) => ({ ...pre, description: e.target.value }));
										setError(false);
									}
								}}
								error={error}
							/>
						</Form.Field>
						<Form.Field>
							<Checkbox
								toggle
								checked={items.completed}
								label="Completed or Not"
								onClick={() => setItems((pre) => ({ ...pre, completed: !pre.completed }))}
							/>
						</Form.Field>
						<Modal.Actions>
							<Button type="submit">Submit</Button>
						</Modal.Actions>
					</Form>
				</Modal.Description>
			</Modal.Content>
		</Modal>
	);
};
export default AddEditTodo;
