const initSatate =
    [
        { id: 1, name: "Lear Yago", completed: false, priority: "Medium" },
        { id: 2, name: "Lear Redux", completed: true, priority: "High" },
        { id: 3, name: "Lear jvascript", completed: false, priority: "Low" },
    ]

const todoListReducer = (state = initSatate, action) => {

    switch (action.type) {
        case "todoList/addTodo": {
            return [...state, action.payload]

        }
        case "todoList/toggleTodoStatus": {
            return state.map(todo =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo)

        }
        default: return state
    }




}

export default todoListReducer;