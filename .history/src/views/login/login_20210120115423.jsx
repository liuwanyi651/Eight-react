import React from 'react'
// import { useHistory } from 'react-router-dom'
import { Form, Input, Button, Card } from 'antd';
import { login } from '../../store//actions/user/user'
import { useDispatch } from 'react-redux'

export const Login = (props) => {
  // let history = useHistory()
  // let login = () => {
  //     // history.push('/') 跳转路由
  //     // props.history.push('/')跳转路由

  //     // history.push('/',{
  //     //     name:'jack' //路由传参
  //     // })
  // }
  let dispatch = useDispatch()
  let onFinish = (values) => {
    dispatch(login(values))
    console.log(values);
  }
  return (
    <div>

  )
}
export default Login