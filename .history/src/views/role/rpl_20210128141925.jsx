import React, { useEffect, useState } from 'react'
import { getallroles, addroles, editroles, delroles } from '../../store/actions/roles/roles'
import { getrights } from '../../store/actions/right/right'
import { useSelector, useDispatch } from 'react-redux'
import { Table, Button, Card, Popconfirm, message, Tag, Form, Input, Modal } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'

const Role = () => {
    let dispatch = useDispatch()
    let type = 'tree'
    //首次调用借口得到用户列表
    useEffect(() => {
        dispatch(getallroles())
        dispatch(getrights(
            { type: type }
        ))
    }, [])

    //获取api借口得到并且存下来的数据
    let allroles = useSelector(state => state.roles.allroles)
    let allright = useSelector(state => state.right.allright)
    console.log(allright);

    //列表数据头部以及格式
    const columns = [
        {
            title: '#',
            dataIndex: 'key',
            align: 'center'
        },
        {
            title: '职位',
            dataIndex: 'roleName',
            align: 'center'
        },
        {
            title: '描述',
            dataIndex: 'roleDesc',
            align: 'center'
        },
        {
            title: '操作',
            align: 'center',
            render: (record) => (
                <div className="d-f j-c-c">
                    <div className="d-f">
                        <Button type="danger" onClick={() => edit(record)}>编辑</Button>
                        <Popconfirm title="确定删除？" onConfirm={() => confirm(record.id)} onCancel={cancel}>
                            <Button type="primary" className="mar-0-10">删除</Button>
                        </Popconfirm>
                        <Button danger onClick={() => distribution(record)}>分配权限</Button>
                    </div>
                </div>
            )
        },
    ]

    //拿到表单所有的方法
    let [form] = Form.useForm();
    let [visible, setVisible] = useState(false);
    //添加角色
    let addrole = () => {
        setVisible(true)
    }

    //添加用户里面的确认按钮
    let handleOk = () => {
        // console.log(form.getFieldsValue());
        form.validateFields().then(()=>{
        let t=form.getFieldsValue()
        dispatch(addroles(
            {
                roleName: t.roleName,
                roleDesc: t.roleDesc,
            }
        ))
        setVisible(false);
        form.resetFields()
        dispatch(getallroles())
        }).catch(()=>{})
        
      };

    //添加的里面取消和关闭
    let Cancel = () => {
        setVisible(false)
        form.resetFields()
    }

    //编辑角色
    //编辑按钮显示弹出并且定义初始id值点击编辑时存当前行的id
    let [form2] = Form.useForm();
    let [id, setId] = useState(1)
    let [visible2, setVisible2] = useState(false);
    let edit = (e2) => {
        setId(e2.id)
        setVisible2(true)
    }

    //编辑用户里面的确认按钮
    let handleOk2 = () => {
        form2.validateFields().then(()=>{
        let v=form2.getFieldsValue()
        dispatch(editroles(
            {   
                id:id,
                roleName: v.roleName2,
                roleDesc: v.roleDesc2,
            }
        ))
        setVisible2(false)
        form2.resetFields()
        dispatch(getallroles())
        }).catch(()=>{})
        
      };

    //编辑的里面取消和关闭
    let Cancel2 = () => {
        setVisible2(false)
        form2.resetFields()
    }
    //删除
    let confirm = (e1) => {
        dispatch(delroles(
            {
                id: e1
            }
        ))
        message.success('删除成功')
        dispatch(getallroles())
    }

    //取消删除
    let cancel = () => {
        message.error('你已取消删除');
    }

    //分配权限
    let distribution = () => {
        console.log('分配权限');




    }

    //点击删除权限
    let close = (i) => {
        console.log(i);
    }

    //样式
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { span: 16 },
    };
    return (
        <div>
            <Card className="w-1 h-600">
                <div><Button type="primary" className="mar-l-10" onClick={addrole}>添加角色</Button></div>

                {/* 显示表格 */}
                <div className="mar-t-50">
                    <Table columns={columns} dataSource={allroles} bordered={true} pagination={false} childrenColumnName='0'
                        expandable={{
                            expandedRowRender: record =>
                                <div className="w-1">
                                    {/* {record.roleName} */}
                                    {
                                        record.children.map((item, index) => {
                                            return (
                                                <div key={index} className="d-f fl-c j-c-c b-t mar-t-5">
                                                    <div className="d-f al-it">
                                                        <Tag color="blue" className="h-35 lh-35" closable onClose={() => close(item)}>{item.authName}<CaretRightOutlined /></Tag>
                                                        <div className="mar-l-20">{item.children.map((item, index) => {
                                                            return (
                                                                <div key={index} className="d-f al-it b-b">
                                                                    <div className="mar-l-20  d-f al-it"><Tag color="green" className="mar-20-0 h-35 lh-35" closable onClose={() => close(item)}>{item.authName}<CaretRightOutlined /></Tag></div>
                                                                    <div className="mar-l-20 d-f">
                                                                        {item.children.map((item, index) => {
                                                                            return (
                                                                                <div key={index} className="mar-l-20"><Tag color="orange" className="mar-20-0 h-35 lh-35" closable onClose={() => close(item)}>{item.authName}</Tag></div>
                                                                            )
                                                                        })}
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            ,
                            rowExpandable: record => record.children.length != 0,
                        }}
                    >
                    </Table>
                </div>



                {/* 添加角色弹出框 */}
                <Modal title="添加角色" mask={false} visible={visible} onOk={handleOk} onCancel={Cancel}>
                    <Form {...layout} form={form} >
                        <Form.Item {...tailLayout} label="用户名" name="roleName" rules={[{ required: true, message: '请输入用户名' }]} >
                            <Input />
                        </Form.Item>
                        <Form.Item {...tailLayout} label="角色描述" name="roleDesc" rules={[{ required: true, message: '请对角色描述' }]} >
                            <Input />
                        </Form.Item>
                    </Form>
                </Modal>

                {/* 添加编辑弹出框 */}
                <Modal title="添加角色" mask={false} visible={visible2} onOk={handleOk2} onCancel={Cancel2}>
                    <Form {...layout} form={form2} >
                        <Form.Item {...tailLayout} label="用户名" name="roleName2" rules={[{ required: true, message: '请输入用户名' }]} >
                            <Input />
                        </Form.Item>
                        <Form.Item {...tailLayout} label="角色描述" name="roleDesc2" rules={[{ required: true, message: '请对角色描述' }]} >
                            <Input />
                        </Form.Item>
                    </Form>
                </Modal>
            </Card>
        </div>
    )
}
export default Role