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
            
        </div>
    )
}
export default Rights