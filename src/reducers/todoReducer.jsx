const todoReducer = (todos, action) => {
    switch (action.type) {
        case "add":
            // console.log("aadd");
            return [
                ...todos,
                {
                    id: action.id,
                    text: action.text,
                },
            ];
        case "delete":
            // console.log("deletedd");
            // console.log(action.todo.id);
            return todos.filter((todo) => todo.id !== action.todo.id);
        case "edit":
            // console.log("editedd");
            // console.log(action.todo);
            return todos.map((todo) => {
                if (todo.id === action.todo.id) {
                    // console.log("editd");
                    // console.log(todo.text);
                    todo.text = action.text;
                    return todo;
                } else return todo;
            });
    }
};

export default todoReducer;
