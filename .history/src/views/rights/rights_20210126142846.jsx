import React, { useEffect } from 'react'
import { Table, Tag, Search, Form, Input, Button, Pagination } from "antd"
import { getRights } from '../../store/actions/permission/permission'
import { useDispatch, useSelector } from 'react-redux'
const Rights = (props) => {
    // console.log(props);
    // 表头输入框input
    const { Search } = Input;
    const onSearch = (value) => {
        console.log(value);
    }
    let dispatch = useDispatch()
    let list = useSelector(state => state.permission.rights)
    console.log(list);
    useEffect(() => {
        dispatch(getRights())
    }, [])
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
            render: (tag, record, index) => {
                console.log(record);
                return (
                    tag === '0' ? <><Tag color="magenta">一级</Tag></> : tag === '1' ? <><Tag color="green">二级</Tag></> : <><Tag color="blue">三级</Tag></>
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