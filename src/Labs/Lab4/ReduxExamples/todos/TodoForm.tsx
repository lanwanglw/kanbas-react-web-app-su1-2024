import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

const TodoForm = () => {
    const { todo, isEditing } = useSelector((state: any) => state.todosReducer);
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if (isEditing) {
            setTitle(todo.title);
        }
    }, [isEditing, todo]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing) {
            dispatch(updateTodo({
                ...todo,
                title,
            }));
        } else {
            dispatch(addTodo({
                id: Date.now().toString(),
                title,
            }));
        }
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Learn Mongo"
                />
                <div className="input-group-append">
                    <button
                        type="submit"
                        className="btn btn-warning text-black"
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(updateTodo({
                                ...todo,
                                title,
                            }));
                            setTitle("");
                        }}
                    >
                        Update
                    </button>
                    <button
                        type="submit"
                        className="btn btn-success"
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(addTodo({
                                id: Date.now().toString(),
                                title,
                            }));
                            setTitle("");
                        }}
                    >
                        Add
                    </button>
                </div>
            </div>
        </form>
    );
};

export default TodoForm;
