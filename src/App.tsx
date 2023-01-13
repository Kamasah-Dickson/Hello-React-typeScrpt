import "./App.css";
import React, { useState } from "react";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([]);

	const handleAdd = (e: React.FormEvent) => {
		e.preventDefault();

		if (todo) {
			setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
			setTodo("");
		}
	};

	return (
		<div className="App">
			<span className="heading">Taskify</span>
			<InputField handleAdd={handleAdd} todo={todo} setTodo={setTodo} />
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
};

export default App;
