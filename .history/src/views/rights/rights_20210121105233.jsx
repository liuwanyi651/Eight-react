import React,{useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {getRights} from '../../store/actions/permission/permission'

export const Rights = (props) => {
    console.log(props);
    let location = useLocation()
    console.log(location );

    useEffect(()=>{
        
    })
    return (
        <div>
            Rights
        </div>
    )
}
export default Rights