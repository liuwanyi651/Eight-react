import React,{useState,useEffect} from 'react'
import {getgoodslist} from '../../store/actions/shop/shop'
import {useDispatch,useSelector} from 'react-redux' 
import { EditOutlined, DeleteOutlined,SyncOutlined,CheckCircleOutlined} from '@ant-design/icons'
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
          title: '分类名称',
          dataIndex: 'cat_name',
          key: 'cat_name',
        },
        {
          title: '是否有效',
          dataIndex: 'cat_deleted',
          key: 'cat_deleted',
          render:(tag,record,index)=>{
            //   console.log(tag);
              return(
                  tag === 'true'?<><Tag icon={<SyncOutlined/>} color="processing">processing</Tag></>: <><Tag icon={<CheckCircleOutlined/>} color="success">
                </Tag> </>
              )
          }
        },
        {
          title: '排序',
          dataIndex: 'cat_level',
          key: 'cat_level',
          render: (tag, record, index) => {
            // console.log(record);
            return (
                tag === '0' ? <><Tag color="magenta">一级</Tag></> : tag === '1' ? <><Tag color="green">二级</Tag></> : <><Tag color="blue">三级</Tag></>
            )
        }
        },
        {
          title: '操作',
          render:
            (text, record) => <div className='flex'>
              {/* 编辑地址按钮 */}
              <div>
                <Button type="primary" icon={<EditOutlined />} >删除</Button>
              </div>
              {/* 物流信息按钮 */}
              <div>
                <Button type="primary" danger style={{ margin: '0 10px'}} icon={<DeleteOutlined/>}>删除</Button>
              </div>
            </div>
        },
      ];
    return (
        <div>
        {/* 添加分类按钮 需要 跳转路由 */}
        <Button type="primary" style={{ width: 80 }} >添加分类</Button>
        {/* Table表格 渲染数据  */}
       <Table dataSource={list.result} columns={columns}></Table>
   </div>
    )
}
export default Category