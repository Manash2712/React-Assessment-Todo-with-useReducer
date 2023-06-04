import { useState } from "react";

const AddTask = ({ onAddTodo }) => {
    const [inputTodo, setInputTodo] = useState("");

    return (
        <div>
            <input
                type="text"
                name="todo"
                className="input-todo"
                onChange={(e) => {
                    setInputTodo(e.target.value);
                }}
                value={inputTodo}
            />
            <button
                className="add-todo"
                onClick={() => {
                    onAddTodo(inputTodo);
                    setInputTodo("");
                }}
            >
                Add Todo
            </button>
        </div>
    );
};

export default AddTask;
