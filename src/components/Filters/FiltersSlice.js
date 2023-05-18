// here is the file update the data from the actions that dispatch sends
const initState = {
    search: '',
    status: 'All',
    priority: [] 
}
const filtersReducer = (state = initState, action) => {
    console.log({state, action})
    switch(action.type) {
        case 'filters/searchFilterChange':
            return {
                ...state,
                search: action.payload   
            }
        case ''
        default:
            return state
    }
}

export default filtersReducer;

// de cap nhat duoc state trong mot cai kho chung thi ta dung disapach