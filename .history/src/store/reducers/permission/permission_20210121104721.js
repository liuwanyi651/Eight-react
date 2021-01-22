let initState = {
    rights:[]
}

// action 是一个对象 一个是type 一个是data
export default function permissionReducer(state = initState, action) {
    switch (action.type) {
        case 'getRights':
            return{
                ...state,
                users:action.data
            }
        default:
            return {
                ...state
            }
    }
}