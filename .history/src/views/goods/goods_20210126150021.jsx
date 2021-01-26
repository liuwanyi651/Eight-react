import React,{useState,useEffect} from 'react'
import {getShopGoods} from '../../store/actions/shop/shop'
import {useDispatch,useSelector} from 'react-redux'
import { Table, Tag, Modal, Form, Input, Button, Pagination } from "antd"
import { EditOutlined, DeleteOutlined} from '@ant-design/icons'


const Goods = (props) => {
    // console.log(props);
    
    let dispatch = useDispatch()
    let list =useSelector(state => state.shop.setgoodslist)
    // 定义数据
    let [queryInfo, setQueryInfo] = useState({ pagenum: '1', pagesize: '7', query: '' })
    useEffect(()=>{
        
    })
   return (
        <div>
            Goods
        </div>
    )
}
export default Goods