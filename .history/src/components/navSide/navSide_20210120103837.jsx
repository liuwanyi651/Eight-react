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
        dispatch(getMenus)
    },[])
    return (    
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {/* <Menu.Item key="1" icon={<UserOutlined />}>
                nav 1
        </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
        </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
        </Menu.Item> */}
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