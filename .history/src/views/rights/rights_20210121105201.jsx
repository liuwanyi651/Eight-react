import React,{u} from 'react'
import {useLocation} from 'react-router-dom'
import {getRights} from '../../store/actions/permission/permission'

export const Rights = (props) => {
    console.log(props);
    let location = useLocation()
    console.log(location );
    return (
        <div>
            Rights
        </div>
    )
}
export default Rights