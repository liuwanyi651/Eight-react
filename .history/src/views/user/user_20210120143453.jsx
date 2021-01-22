
import React from 'react'
import {useLocation} from 'react-router-dom'

export const User = (props) => {
    console.log(props);
    let location = useLocation()
    console.log(location );
    return (
        <div>
            User
        </div>
    )
}
export default User