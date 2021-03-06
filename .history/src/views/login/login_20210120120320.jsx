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
    <div className="w-max h-max">
      <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 500 }} className="m-a m50">
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
    </Card>
    </div>
  )
}
export default Login