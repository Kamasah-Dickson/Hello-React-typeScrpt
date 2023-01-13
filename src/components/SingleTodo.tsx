import React, { useState, useRef, useEffect } from "react";
import { Todo } from "../model";
import "../index.css";

type Props = {
	todo: Todo;
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function SingleTodo({ todo, todos, setTodos }: Props) {
	const [edit, setEdit] = useState<boolean>(false);
	const [editTodo, seteditTodo] = useState(todo.todo);

	const inputRef = useRef<HTMLInputElement>(null);

	const handleDone = (id: number) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
			)
		);
	};

	const handleDelete = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const handleEdit = (id: number) => {
		if (!edit && !todo.isDone) {
			setEdit(!edit);
		} else {
			setEdit(!edit);
		}
	};

	useEffect(() => {
		inputRef.current?.focus();
	}, [edit]);

	function handleEdit2(e: React.FormEvent, id: number) {
		e.preventDefault();

		setTodos(
			todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
		);

		setEdit(false);
	}

	return (
		<form className="todos__single" onSubmit={(e) => handleEdit2(e, todo.id)}>
			{edit ? (
				<input
					ref={inputRef}
					className="todos__single--text"
					value={editTodo}
					onChange={(e) => seteditTodo(e.target.value)}
				/>
			) : todo.isDone ? (
				<s className="todos__single--text">{todo.todo}</s>
			) : (
				<span className="todos__single--text">{todo.todo}</span>
			)}
			<div>
				<span className="icon edit" onClick={() => handleEdit(todo.id)}>
					Edit
				</span>
				<span className="icon delete" onClick={() => handleDelete(todo.id)}>
					Delete
				</span>
				<span className="icon done" onClick={() => handleDone(todo.id)}>
					Done
				</span>
			</div>
		</form>
	);
}

export default SingleTodo;
