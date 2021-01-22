
import React, { useState, useEffect } from 'react'
import { getUsers } from '../../store/actions/user/user'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input, InputNumber, Button } from 'antd';
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
        
    // 表单
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      
      const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      };
    //   const Demo = () => {
    //     const onFinish = (values: any) => {
    //       console.log(values);
    //     };

    return (
        <div>
             <Form {...layout} name="nest-messages" >

      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
    </Form>
        </div>
    )
}
export default User
// ReactDOM.render(<Demo />, mountNode)