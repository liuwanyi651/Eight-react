import React, { useEffect } from 'react'
import { getRoles } from '../../store/actions/permission/permission'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Switch, Modal, Form, Input, Button, Pagination } from "antd"
import { EditOutlined, DeleteOutlined, SettingOutlined } from '@ant-design/icons'
const Role = (props) => {
    // console.log(props);
    let dispatch = useDispatch()
    // 赋值给list
    let list = useSelector(state => state.permission.setroles)
    console.log(list);
    // 初始化调用这个角色列表请求
    useEffect(() => {
        dispatch(getRoles())
    }, [])


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
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: '描述',
            dataIndex: 'role_name',
            key: 'role_name',
        },
        {
            title: '电话',
            dataIndex: 'mobile',
            key: 'mobile',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: '操作',
            render:
                (text, record) => <div className='flex'>
                    {/* 编辑修改角色按钮 */}
                    <div>
                        <Button type="primary" icon={<EditOutlined />}></Button>
                    </div>
                    {/* 删除角色按钮 */}
                    <div>
                        <Button type="primary" style={{ margin: '0 10px' }} icon={<DeleteOutlined />}></Button>
                    </div>
                    {/* 分配角色设置按钮 */}
                    <div>
                        <Button type="primary" icon={<SettingOutlined />} ></Button>
                    </div>
                </div>
        },
    ];

    return (
        <div>
            {/* Table表格 渲染数据  */}
            <Table dataSource={list} columns={columns}></Table>
        </div>
    )
}
export default Role