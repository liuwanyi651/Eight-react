let initState = {
    menus: []
}

// action 是一个对象 一个是type 一个是data
export default function userReducer(state = initState, action) {
    switch (action.type) {
        case 'getMenus':
            return {
                ...state,
                menus: action.data
            }
        default:
            return {
                ...state
            }
    }
}