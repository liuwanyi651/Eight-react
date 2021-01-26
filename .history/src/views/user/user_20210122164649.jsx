
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
    // console.log(a, s);
  }
  let edit = (d) => {
    // console.log(d);
  }
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
      title: '姓名',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '角色',
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
      title: '状态',
      dataIndex: 'mg_state',
      key: 'mg_state',
      render: (text, record) => {
        console.log(record);
        return (
          <Switch defaultChecked={record.mg_state} onChange={(e) => change(e, record)}></Switch>
        )
      }
    },
    {
      title: '操作',
      // dataIndex: 'cz',
      // key: 'cz',
      render:
        (text, record) => <div className='flex'>
          {/* 编辑修改角色按钮 */}
          <div> 
            < type="primary"  icon={<EditOutlined />} onClick={() => edit(record)}></>
          </div>
          {/* 删除角色按钮 */}
          <div>
            <Button type="primary" style={{ margin: '0 10px' }} icon={<DeleteOutlined />}></Button>
          </div>
          {/* 分配角色设置按钮 */}
          <div>
            <Button  type="primary" icon={<SettingOutlined />}></Button>
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