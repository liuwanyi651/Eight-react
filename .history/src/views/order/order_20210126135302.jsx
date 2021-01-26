import React, { useState, useEffect } from 'react'
import { getOrderList } from '../../store/actions/order/order'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Switch, Modal, Form, Input, Button, Pagination } from "antd"
import { EditOutlined, DeleteOutlined} from '@ant-design/icons'
const Order = (props) => {
    // console.log(props);

    let dispatch = useDispatch()
    let list = useSelector(state => state.order.setlist)
    // 定义数据
    let [queryInfo, setQueryInfo] = useState({ pagenum: '1', pagesize: '10', query: '' })
    useEffect(() => {
        dispatch(getOrderList(queryInfo))
    }, [])
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
          title: '订单编号',
          dataIndex: 'username',
          key: 'username',
        },
        {
          title: '订单价格',
          dataIndex: 'role_name',
          key: 'role_name',
        },
        {
          title: '是否付款',
          dataIndex: 'mobile',
          key: 'mobile',
        },
        {
          title: '是否发货',
          dataIndex: 'email',
          key: 'email',
        },
        {
            title: '下单时间',
            dataIndex: 'email',
            key: 'email',
          },
        {
          title: '操作',
          render:
            (text, record) => <div className='flex'>
              {/* 编辑地址按钮 */}
              <div>
                <Button type="primary" icon={<EditOutlined />} ></Button>
              </div>
              {/* 物流信息按钮 */}
              <div>
                <Button type="primary" style={{ margin: '0 10px' }} icon={<DeleteOutlined />}></Button>
              </div>
            </div>
        },
      ];
    return (
        <div>
             {/* Table表格 渲染数据  */}
            {/* <Table dataSource={list.} columns={columns}></Table> */}
        </div>
    )
}
export default Order