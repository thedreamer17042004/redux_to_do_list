// redux cung cấp cho chúng ta combineReducer là giúp cho cốt chúng ta gọn hơn
import { combineReducers } from 'redux'
import filtersReducer from "../components/Filters/FiltersSlice";
import TodoListReducer from "../components/TodoList/TodoSlice";



//c1
const rootReducer = (state = {}, action) => {
    return {
        filters: filtersReducer(state.filters, action),
        todoList: TodoListReducer(state.todoList, action),
    }
}


// c2
// const rootReducer = combineReducers({
//     filters: filtersReducer,
//     TodoList: TodoListReducer,
// })
export default rootReducer;

// de cap nhat duoc state trong mot cai kho chung thi ta dung disapach