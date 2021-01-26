
import React, { useState, useEffect } from 'react'
import { getUsers } from '../../store/actions/user/user'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Switch, Modal, Form, Input, Button, } from "antd"
import { EditOutlined, DeleteOutlined, SettingOutlined } from '@ant-design/icons'
import AiModalForm from '../../components/aiModalForm/aiModalForm'
 const User = (props) => {
  // console.log(props);

   // 表头输入框input
   const { Search } = Input;
   
   const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  const onSearch = value => console.log(value);
  // dispatch 相当于commit
  let dispatch = useDispatch()
  // 赋值给userList
  let userList = useSelector(state => state.user.users)
  // 定义数据
  let [queryInfo, setQueryInfo] = useState({ pagenum: '1', pagesize: '4', query: '' })
  
  useEffect(() => {
    // 获取用户列表的请求
    dispatch(getUsers(queryInfo))
  }, [])
  let change = (a, s) => {
    // console.log(a, s);
  }
  let edit = (d) => {
    // console.log(d);
  }


  let options = [
    {
      type: 'input',
      label: '用户名',
      name: 'username',
      value: '254',
      rules: [
        {
          message: '用户名不能为空',
          required: true
        }
      ]
    },
    {
      type: 'password',
      label: '密码',
      name: 'password',
      value: '45',
      rules: [
        {
          message: '密码不能为空',
          required: true
        }
      ]
    },
    {
      
      type: 'select',
      label: '职位',
      name: 'role',
      rules: [
        {
          message: '职位不能为空',
          required: true
        }
      ],
      children: [
        {
          type: 'option',
          label: '经理',
          value: 1
        },
        {
          type: 'option',
          label: '主管',
          value: 2
        },
        {
          type: 'option',
          label: '员工',
          value: 3
        }
      ]
    }
  ]
    


  const columns = [
    {
      title: '#',
      dataIndex: '',
      // key: 'id',
      render: (text, record, index) => {
        return (
          <span>{index + 1}</span>
        )
      }
    },
    {
      title: '姓名',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '角色',
      dataIndex: 'role_name',
      key: 'role_name',
    },
    {
      title: '电话',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '状态',
      dataIndex: 'mg_state',
      key: 'mg_state',
      render: (text, record) => {
        console.log(record);
        return (
          <Switch defaultChecked={record.mg_state} onChange={(e) => change(e, record)}></Switch>
        )
      }
    },
    {
      title: '操作',
      // dataIndex: 'cz',
      // key: 'cz',
      render:
        (text, record) => <div className='flex'>
          {/* 编辑修改角色按钮 */}
          <div> 
            <Button type="primary"  icon={<EditOutlined />} onClick={() => edit(record)}></Button>
          </div>
          {/* 删除角色按钮 */}
          <div>
            <Button type="primary" style={{ margin: '0 10px' }} icon={<DeleteOutlined />}></Button>
          </div>
          {/* 分配角色设置按钮 */}
          <div>
            <Button  type="primary" icon={<SettingOutlined />}></Button>
          </div>
        </div>
    },
  ];


  return (
    <div>
    <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
    
     <Button type="primary" style={{ width:80 }} >添加用户</Button>
     <Table dataSource={userList} columns={columns}></Table>
     {/* 编辑对话框 */}
     <>
       <Button type="primary" onClick={edit}>

       </Button>
       <Modal title=" 编辑用户" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
         <Form
           {...layout}
           name="basic"
           form={form}
          

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
         </Form>


       </Modal>
       {/* 分配角色对话框 */}
       <div>
       <AiModalForm 
    title='刘婉仪角色'
    options={options}
    visible={visible}
    ok={ok}
    cancel={cancel}
   >

   </AiModalForm>

       </div>

  
     </>

   </div>
  )
}
export default User