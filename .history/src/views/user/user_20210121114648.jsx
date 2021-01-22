
import React,{useEffect} from 'react'
import {getUsers} from '../../store/actions/user/user'
import {useDispatch,useSelector} from 'react-redux'
export const User = (props) => {
    console.log(props);
    let dispatch = useDispatch()
    let selector = 
    useEffect(()=>{
        dispatch(getUsers())
    ,[]})
    return (
        <div>
            User
        </div>
    )
}
export default User