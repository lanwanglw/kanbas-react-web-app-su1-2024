import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

type Todo = {
    id: string;
    title: string;
};

interface TodoItemProps {
    todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            {todo.title}
            <div>
                <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => dispatch(setTodo(todo))} id="wd-set-todo-click">
                    Edit
                </button>
                <button
                    className="btn btn-danger btn-sm "
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    id="wd-delete-todo-click">
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TodoItem;