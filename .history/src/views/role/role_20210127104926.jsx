import React, { useEffect } from 'react'
import { getRoles } from '../../store/actions/permission/permission'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Tag, Modal, Form, Input, Button, Pagination } from "antd"
import { EditOutlined, DeleteOutlined, SettingOutlined,CaretRightOutlined} from '@ant-design/icons'
const Role = (props) => {
    // console.log(props);
    let dispatch = useDispatch()
    // 赋值给list
    let list = useSelector(state => state.permission.setroles)
    // console.log(list);
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
            dataIndex: 'roleName',
            key: 'roleName',
        },
        {
            title: '描述',
            dataIndex: 'roleDesc',
            key: 'roleDesc',
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
            {/* 添加角色的按钮 */}
            <Button type="primary" style={{ width: 80, marginBottom: 10 }} >添加角色</Button>
            {/* Table表格 渲染数据  */}
            <Table dataSource={list} columns={columns} childrenColumnName='children1'
                expandable={{
                    expandedRowRender: (record) => {
                        console.log(record);
                        return (
                            <>
                                {record.children.map((item, index) => {
                                    return (
                                        <div key={index} className="flex pd10 bbs">
                                            {/* 第一级权限 */}
                                            <div className="flex a-center" style={{width:200}}>
                                                <Tag color='#55acee' closable>
                                                    {item.authName}
                                                </Tag>
                                                
                                            </div>
                                            {/* 第二级权限 */}
                                            <div className="" >
                                                {item.children.map((item1) => {
                                                    return (
                                                        <div className="flex bbs">
                                                            <div key={item1.id} className="m10 flex a-center ">
                                                                <Tag color='#87d068' closable>
                                                                    {item1.authName}
                                                                </Tag>
                                                            </div>
                                                            {/* 第三级权限 */}
                                                            <div className="">
                                                                {item1.children.map((item2) => {
                                                                    return (
                                                                        <div className>
                                                                            <div key={item2.id} className="m10">
                                                                                <Tag color='#2db7f5' closable>
                                                                                    {item2.authName}
                                                                                </Tag>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}
                            </>
                        )
                    }
                }}></Table>
        </div>
    )
}
export default Role