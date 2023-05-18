//selector là  nơi chọn hay là lấy dữ liệu từ ui
// trong dự án thực tế ta dùng reselect nó help us viết lồng select rất tiện  và dễ nhìn(redux-toolkit cung cấp sẵn cho chúng ta libray đó)
// nên chúng ta ko phải cài đặt thủ công nên h mh dùng redux core thì mh cai đat
import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
// export const filterPrioritesSelector = (state) => state.filters.priority;
export const todoListSelector = (state) => state.todoList;

// khi chúng ta có một selector mà phụ thuộc vào selector khác thì ta truyền nó vào làm tham số
// của createSelector tham số cuối là một function
export const todoRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
//   filterPrioritesSelector,

  (todoList, status, searchText) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return todo.name.includes(searchText)
      }

      return todo.name.includes(searchText) && (status === "Completed"
        ? todo.completed
        : !todo.completed)
        
    });
  }
);
