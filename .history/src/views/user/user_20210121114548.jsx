
import React,{useEffect} from 'react'
import {getUsers} from '../../store/actions/user/user'
import {} f
export const User = (props) => {
    console.log(props);
 
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