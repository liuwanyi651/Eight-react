
import React, { useState, useEffect } from 'react'
import { getUsers } from '../../store/actions/user/user'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input, Button, Radio } from 'antd';
export const User = (props) => {
    // console.log(props);

    // dispatch 相当于commit
    let dispatch = useDispatch()
    // 赋值给userList
    let userList = useSelector(state => state.user.users)
    // 定义数据
    let [queryInfo,setQueryInfo] = useState({pagenum:'1',pagesize:'3',query:''}) 
    useEffect(() => {
        // 获取用户列表的请求
        dispatch(getUsers(queryInfo))
    }, [])
        


    return (
        <div>
             
        </div>
    )
}
export default User