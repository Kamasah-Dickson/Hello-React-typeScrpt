import React from "react";
import { Todo } from "../model";
import "../index.css";
import SingleTodo from "./SingleTodo";

interface Props {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
	return (
		<div className="todos">
			{todos.map((t) => (
				<SingleTodo key={t.id} todo={t} todos={todos} setTodos={setTodos} />
			))}
		</div>
	);
};

export default TodoList;
