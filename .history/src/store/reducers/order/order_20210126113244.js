let initState = {
    setlist: [],
}

// action 是一个对象 一个是type 一个是data
export default function permissionReducer(state = initState, action) {
    switch (action.type) {
        case 'getOrderList':
            return {
                ...state,
                rights: action.data
            }
        default:
            return {
                ...state
            }
    }
}