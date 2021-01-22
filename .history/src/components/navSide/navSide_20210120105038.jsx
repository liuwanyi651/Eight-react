import React,{useEffect} from 'react'
import {Menu} from 'antd'

import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import {useDispatch,useSelector} from 'react-redux'

const NavSide = () => {
    let menus = useSelector((state)=> state.user.menus)
    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch()
    },[])
    return (    
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {
            menus.map(item=>{
                return(
                        <Menu.Item key={item.path}>
                            {item.authName}
                        </Menu.Item>
                )
            })
        }
        </Menu>
    )
}
export default NavSide