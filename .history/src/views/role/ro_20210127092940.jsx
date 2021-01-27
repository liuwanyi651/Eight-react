import React, { useEffect } from 'react'
import { Table, Switch, Modal, Form, Input, Button, Card, Tag } from "antd"
import { useDispatch, useSelector } from 'react-redux'
import { getpowerstree, getroles } from '../../store//actions/rights/rights'
import { EditOutlined, DeleteOutlined, SettingOutlined, AudioOutlined } from '@ant-design/icons'

const Role = () => {
    let adduser = () => {
        console.log(22)
    }
    let dispatch = useDispatch()
    let list = useSelector(state => state.rights.rolelist)
    console.log(11111, list)

    useEffect(() => {
        dispatch(getroles())

    }, [])
    //编辑
    let edit = () => {
        console.log(1)
    }
    //删除
    let dele = () => {
        console.log(2)
    }
    //编辑客户
    let setting = () => { }


    const columns = [
        {
            title: '#',
            dataIndex: '',
            key: 'id',
            render: (text, record, index) => {
                return (
                    <span>
                        {index + 1}
                    </span>
                )
            }
        },
        { title: '职位', dataIndex: 'roleName', key: 'id' },
        { title: '描述', dataIndex: 'roleDesc', key: 'id' },
        {
            title: '操作',
            dataIndex: '',
            key: 'id',
            render: (text, record) => <div className='j-c'>
                <div> <Button icon={<EditOutlined />} onClick={() => edit(record)} >

                </Button></div>
                <div>

                    <Button type="primary" style={{ margin: '0 10px' }} icon={<DeleteOutlined />} onClick={() => dele(record)}></Button>
                </div>
                <div>
                    <Button icon={<SettingOutlined onClick={() => setting(record)} />}></Button>
                </div>
            </div>

        },
    ];




    return (
        <div>
            <Card >
                <Button type="primary" style={{ margin: '0 10px' }} onClick={() => adduser()}>添加用户</Button>

                <Table dataSource={list} columns={columns} childrenColumnName='children1' expandable={{

                    expandedRowRender: record =>
                        // 展开列标签
                        <div >
                            {record.children.map((item, index) => {
                                return (
                                    <div key={index} className='j-a'>
                                        <div>
                                            <Tag className='mb40'>
                                                {item.authName}
                                            </Tag>

                                        </div>
                                        <div >
                                            {item.children.map((item1, index1) => {
                                                return (
                                                <div key={index1} className='j-a'>
                                                    <Tag className='mb40'> {item1.authName}</Tag>
                                                    <div>
                                                        <div>
                                                            {item1.children.map((item2, index2) => {
                                                                return (
                                                                <div key={index2} className='j-a'>
                                                                    <Tag className='mb40'>{item2.authName}</Tag>
                                                                </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                                )
                                            })}
                                            <div >
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                }} />;


            </Card>

        </div>
    )
}

export default Role
