import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'todoList',
    initialState :
    [
        { id: 1, name: "Lear Yago", completed: false, priority: "Medium" },
        { id: 2, name: "Lear Redux", completed: true, priority: "High" },
        { id: 3, name: "Lear jvascript", completed: false, priority: "Low" },
    ],
    reducers: {
        addTodo: (state,action) => {
            state.push(action.payload)
        },
        toggleTodoStatus: (state,action) => {
            const curentTodo = state.filter(todo => todo.id === action.payload);
            curentTodo.completed = !curentTodo.completed;
        }
    }
}) 

