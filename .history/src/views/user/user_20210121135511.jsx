
import React, { useState, useEffect } from 'react'
import { getUsers } from '../../store/actions/user/user'
import { useDispatch, useSelector } from 'react-redux'

export const User = (props) => {
    console.log(props);
    // 
    let [pagenum] = useState('1')
    let [pagesize] = useState('4')
    let [query] = useState('')

    // dispatch 相当于commit
    let dispatch = useDispatch()
    let userList = useSelector(state => state.user.users)
    useEffect(() => {
        // 获取用户列表的请求
        dispatch(getUsers({
            query: "",
            pagenum: pagenum,
            pagesize:pagesize,
        }))
    }, [])
    return (
        <div>
            
        </div>
    )
}
export default User