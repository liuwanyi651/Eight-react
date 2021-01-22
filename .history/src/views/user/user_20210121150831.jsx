
import React, { useState, useEffect } from 'react'
import { getUsers } from '../../store/actions/user/user'
import { useDispatch, useSelector } from 'react-redux'
import { Table} from 'antd';
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
  
      const columns = [
        {
            title: '#',
            dataIndex: 'name',
            key: 'name',
          },
        {
          title: '姓名',
          dataIndex: 'username',
          key: 'name',
        },
        {
          title: '角色',
          dataIndex: 'role_name',
          key: 'age',
        },
        {
          title: '电话',
          dataIndex: 'mobile',
          key: 'address',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            key: 'address',
          },
      ];
 

    return (
        <div>
            <Table dataSource={userList} columns={columns} />;
        </div>
    )
}
export default User