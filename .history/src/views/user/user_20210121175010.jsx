
import React, { useState, useEffect } from 'react'
import { getUsers } from '../../store/actions/user/user'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Table, Button } from 'antd';
import { EditOutlined, DeleteOutlined, SettingOutlined } from '@ant-design/icons'
export const User = (props) => {
  // console.log(props);

  // dispatch 相当于commit
  let dispatch = useDispatch()
  // 赋值给userList
  let userList = useSelector(state => state.user.users)
  // 定义数据
  let [queryInfo, setQueryInfo] = useState({ pagenum: '1', pagesize: '4', query: '' })
  useEffect(() => {
    // 获取用户列表的请求
    dispatch(getUsers(queryInfo))
  }, [])
  let change = (a, s) => {
    console.log(a, s);
  }
  let edit = (d) => {
    console.log(d);
  }
  const columns = [
    {
      title: '#',
      dataIndex: '',
      key: 'id',
      render: (text, record, index) => {
        return (
          <span>{index + 1}</span>
        )
      }
    },
    {
      title: '姓名',
      dataIndex: 'username',
      key: 'id',
    },
    {
      title: '角色',
      dataIndex: 'role_name',
      key: 'id',
    },
    {
      title: '电话',
      dataIndex: 'mobile',
      key: 'id',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'id',
    },
    {
      title: '状态',
      dataIndex: 'mg_state',
      key: 'id',
      render: (text, record) => {
        console.log(record);
        return (
          <Switch defaultChecked={record.mg_state} onChange={(e) => change(e, record)}></Switch>
        )
      }
    },
    {
      title: '操作',
      dataIndex: 'email',
      key: 'id',
      render:
        (text, record) => <div className='flex'>
          <div> 
            <Button icon={<EditOutlined />} onClick={() => edit(record)} >
          </Button></div>
          <div>
            <Button type="primary" style={{ margin: '0 10px' }} icon={<DeleteOutlined />}></Button>
          </div>
          <div>
            <Button icon={<SettingOutlined />}></Button>
          </div>
        </div>
    },
  ];


  return (
    <div>
      <Table dataSource={userList} columns={columns} />;
    </div>
  )
}
export default User