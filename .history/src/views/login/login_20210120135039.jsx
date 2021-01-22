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
      <Card title="欢迎来到小爱后台管理系统" style={{ width: 550}} className="m-a mt200 t-center">
      <Form
        name="basic"
        onFinish={onFinish}
      >
        <Form.Item
          label="请输入用户名"
          name="username"
          rules={[{ required: true, message: '用户名不能为空!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="请输入您密码"
          name="password"
          rules={[{ required: true, message: '密码不能为空!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <div className="fs12">特别提醒：如果您是管理员，请使用管理员账号，如果不知道账号，请联系公司人事</div>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" size="l" className="pdlr20">
            登录
          </Button>
        </Form.Item>
      </Form>
    </Card>
    </div>
  )
}
export default Login