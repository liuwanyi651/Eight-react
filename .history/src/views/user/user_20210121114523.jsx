
import React,{useEffect} from 'react'
import {} from '../../store/actions/user/user'
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