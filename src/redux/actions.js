
export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}
export const searchFilter = (text) => {
    return {
        type: 'filters/searchFilter',
        payload: text
    }
}

