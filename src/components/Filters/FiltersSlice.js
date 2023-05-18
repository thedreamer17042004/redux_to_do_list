// here is the file update the data from the actions that dispatch sends
const initState = {
    search: '',
    status: 'All',
    priority: [] 
    // priorities: [] 
}
const filtersReducer = (state = initState, action) => {
    console.log({state, action})
    switch(action.type) {
        case 'filters/searchFilterChange':
            return {
                ...state,
                search: action.payload   
            }
        case 'filters/statusFilterChange':
            return {
                ...state,
                status: action.payload
            }
        case 'filters/priorityFilterChange':
            return {
                ...state,
                priorities: action.payload
            }
        default:
            return state
    }
}

export default filtersReducer;

// de cap nhat duoc state trong mot cai kho chung thi ta dung disapach