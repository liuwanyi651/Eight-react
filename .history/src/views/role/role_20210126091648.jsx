import React,{useEffect} from 'react'
import {getRoles} from '../../store/actions/permission/permission'
import {useDispatch,useSelector} from 'react-redux'
export const Role = (props) => {
    console.log(props);
    let dispatch = useDispatch
    let selector = useSelector(state => state.permission.setroles)


    return (
        <div>
            Role
        </div>
    )
}
export default Role