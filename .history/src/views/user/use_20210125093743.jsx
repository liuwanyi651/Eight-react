
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../store//actions/user/user'
import { Table, Switch, Modal, Form, Input, Button, } from "antd"
import { EditOutlined, DeleteOutlined, SettingOutlined,AudioOutlined } from '@ant-design/icons'
import AiModalForm from '../../components/Aimodalform/AimodalForm'






const User = (props) => {
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
  let dispatch = useDispatch()
  let list = useSelector(state => state.user.users)
  // console.log(list)
  let [queryinfo, setqueryinfo] = useState({ pagenum: '1', pagesize: '8', query: '' })
  const [isModalVisible, setIsModalVisible] = useState(false);
  let [visible, setVisible] = useState(false)

//初次发请求
  useEffect(() => {
    dispatch(getUsers(queryinfo))
  }, [])
  //状态设置方法
  let change = (checked, record) => {
    console.log(checked, 11111);
    console.log(record, 2222);
  }
//编辑方法
  let edit = () => {
    setIsModalVisible(true);
  }
  // //编辑对话框确定事件
  const [form] = Form.useForm();

  //弹出框确定事件
  const handleOk = () => {
    console.log(form.getFieldsValue())
    setIsModalVisible(false);
  };
  //弹出框取消事件
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  //删除个人用户
  const dele=(recod)=>{
    console.log(recod)

  }
  //分配角色
  let setting=(rec)=>{
    console.log(rec)
    setVisible(true)
  }
 

  let ok = (form) => {
    console.log(form.getFieldsValue())
  }
  let cancel = (form) => {
    console.log(form)
    form.resetFields()
    setVisible(false)
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
                       
  //表单验证通过后的回调

 


  //编辑对话框表单
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
 const columns = [
    {
      title: '#',
      dataIndex: '',
      key: 'id',
      render: (text, record, index) => {
        return (
          <span>
            {index + 1}
          </span>
        )
      }
    },
    {
      title: '姓名',
      dataIndex: 'username',
      key: 'id',
    },
    {
      title: '角色',
      dataIndex: 'role_name',
      key: 'id',
    },
    {
      title: '电话',
      dataIndex: 'mobile',
      key: 'id',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'id',
    },
    {
      title: '状态',
      dataIndex: 'mg_state',
      key: 'id',
      render: (text, record) => {
        // console.log(text)
        // console.log(record)
        return (
          <div>
            <Switch defaultChecked={record.mg_state} onChange={(e) => change(e, record)}></Switch>
          </div>)
      }
    },
    {
      title: '操作',
      dataIndex: '',
      key: 'id',
      render: (text, record) => <div className='j-c'>
        <div> <Button icon={<EditOutlined />} onClick={() => edit(record)} >

        </Button></div>
        <div>
       
     <Button type="primary" style={{ margin: '0 10px' }} icon={<DeleteOutlined />} onClick={()=>dele(record)}></Button>
        </div>
        <div>
          <Button icon={<SettingOutlined  onClick={()=>setting(record)}/>}></Button>
        </div>
      </div>

    },
  ];


  return (
    <div>
     <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
     
      <Button type="primary" style={{ width:80 }} >添加用户</Button>
      <Table dataSource={list} columns={columns}></Table>
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
