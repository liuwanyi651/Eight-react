import React from 'react'
// import { useHistory } from 'react-router-dom'
import { Form,Input,Button } from 'antd';
import {login} from '../../store//actions/user/user'
import {useDispatch} from 'react-redux'

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
    let onFinish = (values) =>{
        dispatch(login(values))
        console.log(values);
    }
    return (
        <Form
        name="basic"
        onFinish={onFinish}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    )
}
export default Login