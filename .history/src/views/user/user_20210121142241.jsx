
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
        
    // 表单
    type LayoutType = Parameters<typeof Form>[0]['layout'];

const FormLayoutDemo = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
      : null;

  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: { span: 14, offset: 4 },
        }
      : null;

    return (
        <div>
             
        </div>
    )
}
export default User