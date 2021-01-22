import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd';

export const Login = (props) => {
    let history = useHistory()
    let login = () => {
        // history.push('/') 跳转路由
        // props.history.push('/')跳转路由

        history.push('/',{
            name:'jack' //路由传参
        })

    }
    return (
        <div>
            <button onClick={login}>登录 </button>
        </div>
    )
}
export default Login