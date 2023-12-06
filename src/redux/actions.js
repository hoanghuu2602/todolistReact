
export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const toggleTodoStatus = (todoId) => {
    return {
        type: 'todoList/toggleTodoStatus',
        payload:todoId
    }
}
export const searchFilter = (text) => {
    return {
        type: 'filters/searchFilter',
        payload: text
    }
}
export const statusFilterChange = (status) => {
    return {
        type: 'filters/statusFilterChange',
        payload: status
    }
}
export const prioritiesFilterChange = (priorities) => { // Gia tri truyen vao la 1 array
    return {
        type: 'filters/prioritiesFilterChange',
        payload: priorities
    }
}

