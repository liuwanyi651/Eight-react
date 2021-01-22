import {createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import user from './reducers/user/user'
import permission from './reducers/permission/permission'
const store = createStore(combineReducers({
    user
}),applyMiddleware(thunk))  

export default store