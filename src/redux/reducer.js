import filtersReducer from "../components/Filters/FilterSlice";
import todoListReducer from "../components/Todo/TodoSlice";
import { combineReducers } from "redux";

// const rootReducer = (state={},action) => {
//     return {
//         filters: filtersReducer(state.filters,action),
//         todoList:todoListReducer(state.todoList,action)
//     }

// }

//  combineReducers: Thay the dong code tren => ngan gon hon

const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer
})


export default rootReducer;