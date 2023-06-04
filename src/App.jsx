import "./App.css";

import { useReducer } from "react";

import todoReducer from "./reducers/todoReducer";

import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

let todoID = 0;

function App() {
    const [todos, dispatch] = useReducer(todoReducer, []);

    const handleAddTodo = (text) => {
        // console.log("clicked");
        dispatch({
            type: "add",
            id: todoID++,
            text: text,
        });
        // console.log("id", todoID);
    };

    const handleChangeTodo = (text, todo) => {
        // console.log("edit", todo);
        dispatch({
            type: "edit",
            text: text,
            todo: todo,
        });
    };

    const handleDeleteTodo = (todo) => {
        // console.log("delete", todo);
        dispatch({
            type: "delete",
            todo: todo,
        });
    };

    return (
        <>
            <h1>Todo App</h1>
            <AddTask onAddTodo={handleAddTodo} />
            {todos.length > 0 ? (
                <TodoList
                    todos={todos}
                    onChangeTodo={handleChangeTodo}
                    onDeleteTodo={handleDeleteTodo}
                />
            ) : (
                ""
            )}
        </>
    );
}

export default App;
