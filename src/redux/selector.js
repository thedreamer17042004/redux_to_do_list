// trong dự án thực tế ta dùng reselect nó help us viết lồng select rất tiện  và dễ nhìn(redux-toolkit cung cấp sẵn cho chúng ta libray đó)
// nên chúng ta ko phải cài đặt thủ công nên h mh dùng redux core thì mh cai đat
import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;


// khi chúng ta có một selector mà phụ thuộc vào selector khác thì ta truyền nó vào làm tham số
// của createSelector tham số cuối là một function
export const todoRemainingSelector = createSelector(todoListSelector, searchTextSelector, (todoList, searchText) =>{
    return  todoList.filter((todo) => {
                return todo.name.includes(searchText)
            });

})