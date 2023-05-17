//REDUCER
// ta dùng các trường hợp ta có thể dự đoán(như là các tham số truyền vào dữ liệu thôi) được giá trị thì ms dùng reduce còn không thì nerver use like math.random, data.Now()
// A FUNCTION
const initValue = { value: 0}

const rootReducer = (state = initValue, action) => {

    // const INCREMENT = {
    //     type: 'todoList/increment',
    //     payload: 10
    // }


    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                // ...state có nghĩa là kế thừa tài sản của cái state ban đầu 
                value: state.value + 1
            }
        case 'todoList/increment':
            return {
                ...state,
                value: state.value + action.payload
            }
        default:
            return state;
    }
}

//  the rules are very vital in redux
// dùng redux-ui


///ACTION
// là một object do we qui định
const INCREMENT = {
    type: 'todoList/increment',
    payload: 10
}
//action creator là một function tạo ra action nó giúp chúng ta không phải viết các object lặp đi lặp lại
const incrementCreater = (data) => {
    return {
        type: 'todoList/increment',
        payload: 10
    };
};
incrementCreater(10);

//  DISPATCH là một function
// cách duy nhất để cập nhật state trong thằng store là dùng thằng dispatch này
//c1
dispatch(INCREMENT)
//c2
dispatch(incrementCreater(14))