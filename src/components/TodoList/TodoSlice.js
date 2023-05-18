// here is the file update the data from the actions that dispatch sends
const initState = [
  { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
  { id: 2, name: "Learn Redux", completed: true, priority: "High" },
  { id: 3, name: "Learn Javascript", completed: false, priority: "Low" },
];

const TodoListReducer = (state = initState, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toogleTodoStatus":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return state;
  }
};

export default TodoListReducer;

// de cap nhat duoc state trong mot cai kho chung thi ta dung disapach
