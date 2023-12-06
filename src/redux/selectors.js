import { createSelector } from "reselect"

export const searchSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;

export const todosRemainingSelector = createSelector(
    todoListSelector,
    searchSelector,
    filterStatusSelector,
    filterPrioritiesSelector,
    (todolist, search,status,priorities) => {
        return todolist.filter((todo) => {
            if (status === 'All') {
                return priorities.length
                    ? todo.name.includes(search) && priorities.includes(todo.priority)
                    : todo.name.includes(search)
            }
            return (
                todo.name.includes(search) && 
                    (status === 'Completed'? todo.completed: !todo.completed) &&
                   (priorities.length ? priorities.includes(todo.priority): true)
            );
    })
})