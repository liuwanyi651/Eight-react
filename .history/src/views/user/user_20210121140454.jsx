
import React, { useState, useEffect } from 'react'
import { getUsers } from '../../store/actions/user/user'
import { useDispatch, useSelector } from 'react-redux'

export const User = (props) => {
    // console.log(props);

    // dispatch 相当于commit
    let dispatch = useDispatch()
    let userList = useSelector(state => state.user.users)
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