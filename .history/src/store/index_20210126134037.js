import {createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import user from './reducers/user/user'
import permission from './reducers/permission/permission'
im
const store = createStore(combineReducers({
    user,permission
}),applyMiddleware(thunk))  

export default store