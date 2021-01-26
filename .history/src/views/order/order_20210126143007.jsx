import React, { useState, useEffect } from 'react'
import { getOrderList } from '../../store/actions/order/order'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Tag, Modal, Form, Input, Button, Pagination } from "antd"
import { EditOutlined, EnvironmentOutlined} from '@ant-design/icons'
const Order = (props) => {
    // console.log(props);
        // 表头输入框input
        const { Search } = Input;
        const onSearch = (value) => {
            console.log(value);
        }
    let dispatch = useDispatch()
    let list = useSelector(state => state.order.setlist)
    // 定义数据
    let [queryInfo, setQueryInfo] = useState({ pagenum: '1', pagesize: '7', query: '' })
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
          dataIndex: 'order_number',
          key: 'order_number',
        },
        {
          title: '订单价格',
          dataIndex: 'order_price',
          key: 'order_price',
        },
        {
          title: '是否付款',
          dataIndex: 'order_pay',
          key: 'order_pay',
          render:(tag,record,index)=>{
              console.log(tag);
              return(
                tag === '0'?<><Tag color="magenta">已付款</Tag></>: <><Tag color="green">未付款</Tag></>
              )
          }
        },
        {
          title: '是否发货',
          dataIndex: 'is_send',
          key: 'is_send',
        },
        {
            title: '下单时间',
            dataIndex: 'new_time',
            key: 'new_time',
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
                <Button type="primary" danger style={{ margin: '0 10px'}} icon={<EnvironmentOutlined />}></Button>
              </div>
            </div>
        },
      ];
    return (
        <div>
            {/* 搜索框及添加用户 */}
            <Search placeholder="qingshu" allowClear onSearch={onSearch} style={{ width: 200, height: 40 }} />
             {/* Table表格 渲染数据  */}
            <Table dataSource={list.goods} columns={columns}></Table>
        </div>
    )
}
export default Order