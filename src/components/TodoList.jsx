import { useState } from "react";

import pen from "../assets/pen.svg";
import cross from "../assets/cross.svg";

const EditTodo = ({ setIsEdited, onChangeTodo, todo }) => {
    const [editedTodo, setEditedTodo] = useState("");
    // console.log("inside edittodo");
    return (
        <div className="edit-todo">
            <input
                type="text"
                name="editedTodo"
                id="editedTodo"
                onChange={(e) => {
                    setEditedTodo(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    setIsEdited(false);
                    onChangeTodo(editedTodo, todo);
                }}
            >
                Edit
            </button>
        </div>
    );
};

const Todo = ({ todo, onChangeTodo, onDeleteTodo }) => {
    const [isEdited, setIsEdited] = useState(false);
    return (
        <div className="todo-div">
            <p>{todo.text}</p>

            {/* <button onClick={() => setIsEdited(true)}> */}
            <img
                src={pen}
                alt="edit"
                height="20px"
                onClick={() => setIsEdited(true)}
                className="img-edit"
            />
            {/* </button> */}
            <img
                src={cross}
                alt="delete"
                height="20px"
                onClick={() => onDeleteTodo(todo)}
                className="img-edit"
            />
            {/* <button onClick={() => onDeleteTodo(todo)}>delete</button> */}
            {isEdited ? (
                <EditTodo
                    setIsEdited={setIsEdited}
                    onChangeTodo={onChangeTodo}
                    todo={todo}
                />
            ) : (
                ""
            )}
        </div>
    );
};

const TodoList = ({ todos, onChangeTodo, onDeleteTodo }) => {
    return (
        <>
            {todos.map((todo) => (
                <Todo
                    todo={todo}
                    onChangeTodo={onChangeTodo}
                    onDeleteTodo={onDeleteTodo}
                    key={todo.id}
                />
            ))}
        </>
    );
};

export default TodoList;
