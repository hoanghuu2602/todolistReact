import { createSelector } from "reselect"

export const searchSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;

export const todosRemainingSelector = createSelector(
    todoListSelector,
    searchSelector,
    (todolist, search) => {
    return todolist.filter((todo) => {
        return todo.name.includes(search)
    })
})