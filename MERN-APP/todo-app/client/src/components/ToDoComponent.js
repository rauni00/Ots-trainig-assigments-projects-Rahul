import { Checkbox, Icon, Popup } from "semantic-ui-react";

const ToDoComponent = ({ todo, updateTodo, deleteTodo }) => {
	return (
		<>
			<span className={todo.completed ? "completed" : "not-completed"}>{todo.description}</span>
			<span style={{ margin: 2 }}>
				<Checkbox toggle checked={todo.completed} onClick={() => updateTodo(todo._id)} />
				<Popup content="delete" trigger={<Icon name="delete" onClick={() => deleteTodo(todo._id)} className="delete-item" />} />
			</span>
		</>
	);
};

export default ToDoComponent;
