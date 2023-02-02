import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Segment } from "semantic-ui-react";
import "./App.css";
import ToDoComponent from "./components/ToDoComponent";
import AddEditTodo from "./components/model/AddEditTodo";

function App() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		getAllTodos();
	}, []);

	const getAllTodos = async () => {
		const response = await axios.get("http://localhost:3001/todos");
		setTodos(response.data);
	};

	const updateTodo = async (todoId) => {
		const response = await axios.patch("http://localhost:3001/todos/edit/" + todoId);
		if (response.status === 200) {
			const updatedTodos = todos.map((todo) => {
				if (todo._id === todoId) {
					todo.completed = response.data.completed;
				}
				return todo;
			});
			setTodos(updatedTodos);
		}
	};

	const deleteTodo = async (todoId) => {
		const response = await axios.delete("http://localhost:3001/todos/delete/" + todoId);
		if (response.data.deletedCount === 1) {
			const filterTodo = todos.filter((todo) => todo._id !== todoId);
			setTodos(filterTodo);
		}
	};
	return (
		<div className="container">
			<Container style={{ marginTop: "5rem", width: "30rem" }}>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<h1>Todo Application</h1>
					<AddEditTodo setTodos={setTodos} />
				</div>
				<hr style={{ marginTop: "2rem" }} />
				{todos.length === 0 ? (
					<h1>Empty</h1>
				) : (
					<>
						{todos.map((todo) => (
							<Segment
								raised
								key={todo._id}
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
								<ToDoComponent todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
							</Segment>
						))}
					</>
				)}
			</Container>
		</div>
	);
}

export default App;
