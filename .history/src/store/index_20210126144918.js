import {createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import user from './reducers/user/user'
import permission from './reducers/permission/permission'
import order from './reducers/order/order'
import shop from ''
const store = createStore(combineReducers({
    user,permission,order
}),applyMiddleware(thunk))  

export default store