import React,{useEffect} from 'react'
import {getRoles} from '../../store/actions/permission/permission'
import {const dispatch = useDispatch(function)}
export const Role = (props) => {
    console.log(props);
    let dispatch = useDispatch


    return (
        <div>
            Role
        </div>
    )
}
export default Role