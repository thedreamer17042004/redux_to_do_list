// todolist là tính năng tương ứng với hành động addTodo


// cách này không nên viết
// export const addTodoAction = {
//     type: 'todoList/addTodo',
//     payload: { id: 5, name: 'Learn Football', completed: false, priority: 'Medium' },

// }

// nên viết cách này nha nó dùng action creator dùng lại nhiều lần
export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}


//tao action thanh cong
export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}
//action creators => function để trả về function

export  const statusFilterChange = (status) => {
    return {
        type: 'filters/statusFilterChange',
        payload: status
    }
}