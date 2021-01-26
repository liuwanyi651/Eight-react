import React,{useState,useEffect} from 'react'
import {getgoodslist} from '../../store/actions/shop/shop'
import {useDispatch,useSelector} from 'react-redux' 
import { EditOutlined, DeleteOutlined} from '@ant-design/icons'
import { Table, Tag, Modal, Form, Input, Button, Pagination } from "antd"
 const Category = (props) => {
    console.log(props);

    let dispatch = useDispatch()
    let list = useSelector(state => state.shop.setgoods)
    
    return (
        <div>
            Category
        </div>
    )
}
export default Category