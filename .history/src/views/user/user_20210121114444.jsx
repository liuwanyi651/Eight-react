
import React,{useEffect} from 'react'

export const User = (props) => {
    console.log(props);
 
    useEffect(()=>{
        dispatch(getUsers())
    })
    return (
        <div>
            User
        </div>
    )
}
export default User