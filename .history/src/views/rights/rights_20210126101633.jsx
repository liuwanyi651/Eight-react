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

    const columns = [
        {
            title: '#',
            dataIndex: '',
            // key: 'id',
            render: (text, record, index) => {
                return (
                    <span>{index + 1}</span>
                )
            }
        },
        {
            title: '职位',
            dataIndex: 'roleName',
            key: 'roleName',
        },
        {
            title: '描述',
            dataIndex: 'roleDesc',
            key: 'roleDesc',
        }
    return (
        <div>
            
        </div>
    )
}
export default Rights