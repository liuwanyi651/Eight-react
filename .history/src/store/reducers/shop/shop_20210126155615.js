let initState = {
    setgoodslist: [],
    setgoods:[]
}

// action 是一个对象 一个是type 一个是data
export default function permissionReducer(state = initState, action) {
    switch (action.type) {
        case 'getShopGoods':
            return {
                ...state,
                setgoodslist: action.data
            }
        case 'getgoodslist':
            return {
                ...state,
                setgoods: action.data
            }
        default:
            return {
                ...state
            }
    }
}