import React,{useState,useEffect} from 'react'
import {getShopGoods} from '../../store/actions/shop/shop'
import {useDispatch,useSelector} from 'react-redux'
import { Table, Tag, Modal, Form, Input, Button, Pagination } from "antd"
import { EditOutlined, DeleteOutlined} from '@ant-design/icons'


export const Goods = (props) => {
    console.log(props);
    
    return (
        <div>
            Goods
        </div>
    )
}
export default Goods