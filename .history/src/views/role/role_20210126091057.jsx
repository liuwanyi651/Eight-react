import React,{} from 'react'
import {useLocation} from 'react-router-dom'

export const Role = (props) => {
    console.log(props);
    let location = useLocation()
    console.log(location );
    return (
        <div>
            Role
        </div>
    )
}
export default Role