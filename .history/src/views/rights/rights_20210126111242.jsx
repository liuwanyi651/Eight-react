import React,{useEffect} from 'react'
import { Table, Tag, Modal, Form, Input, Button, Pagination } from "antd"
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
            render: (text, record, index) => {
                return (
                    <span>{index + 1}</span>
                )
            }
        },
        {
            title: '权限名称',
            dataIndex: 'authName',
            key: 'authName',
        },
        {
            title: '权限等级',
            dataIndex: 'level',
            key: 'level',
            render:(tag, record,index)=>{
                console.log(record);
                return(
                <div>
                    <Tag color="red" tag="0">一级</Tag>
                    <Tag color="volcano" record="1">二级</Tag>
                    <Tag color="orange" record="2">三级</Tag>
                </div>
                    
                )
            }
            
        },
    ];
    
    return (
        <div>
            {/* Table表格 渲染数据  */}
            <Table dataSource={list} columns={columns}></Table> 
        </div>
    )
}
export default Rights