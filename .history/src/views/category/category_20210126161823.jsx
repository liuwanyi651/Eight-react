import React,{useState,useEffect} from 'react'
import {getgoodslist} from '../../store/actions/shop/shop'
import {useDispatch,useSelector} from 'react-redux' 
import { EditOutlined, DeleteOutlined} from '@ant-design/icons'
import { Table, Tag, Modal, Form, Input, Button, Pagination } from "antd"
 const Category = (props) => {
    // console.log(props);

    let dispatch = useDispatch()
    let list = useSelector(state => state.shop.setgoods)
    // 定义数据
    let [queryInfo, setQueryInfo] = useState({ pagenum: '1', pagesize: '7', query: '' })
    useEffect(()=>{
        dispatch(getgoodslist(queryInfo))
    },[])
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
          title: '商品名称',
          dataIndex: 'goods_name',
          key: 'goods_name',
        },
        {
          title: '商品价格(元)',
          dataIndex: 'goods_price',
          key: 'goods_price',
        },
        {
          title: '商品重量',
          dataIndex: 'goods_weight',
          key: 'goods_weight',
        },
        {
            title: '创建时间',
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
                <Button type="primary" danger style={{ margin: '0 10px'}} icon={<DeleteOutlined/>}></Button>
              </div>
            </div>
        },
      ];
    return (
        <div>
        {/* 搜索框及添加用户 */}

        <Button type="primary" style={{ width: 80 }} >添加商品</Button>
        {/* Table表格 渲染数据  */}
       <Table dataSource={list.goods} columns={columns}></Table>
   </div>
    )
}
export default Category