import React,{useEffect} from 'react'
import {useLocation} from 'react-router-dom'
im

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