import React,{useEffect} from 'react'
import { Table, Switch, Modal, Form, Input, Button, Pagination } from "antd"
import {getRights} from '../../store/actions/permission/permission'
import {useDispatch,useSelector} from 'react-redux'
 const Rights = (props) => {
    // console.log(props);

    let dispatch = useDispatch()
    let list = useSelector(state => state.permission.rights)
    console.log(list);
    useEffect(()=>{
        dispatch(getRights())
    },[])

    
    return (
        <div>
            
        </div>
    )
}
export default Rights