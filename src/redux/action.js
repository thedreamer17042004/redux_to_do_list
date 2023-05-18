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

export const toogleTodoStatus = (todoId) => {
    return {
        type: 'todoList/toogleTodoStatus',
        payload: todoId
        // id để bt được thằng nào mình đang thao tác mà thôi
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
// do ta chọn được nhiều độ ưu tiên cùng môt lúc nên ta truyền props vào là một array
export  const statusFilterChange = (status) => {
    return {
        type: 'filters/statusFilterChange',
        payload: status
    }
}



export  const priorityFilterChange = (priorites) => {
    return {
        type: 'filters/priorityFilterChange',
        payload: priorites
    }
}