import React,{useEffect} from 'react'
import {Menu} from 'antd'
import * as Icons from '@ant-design/icons'
import {useDispatch,useSelector} from 'react-redux'
import {getMenus} from '../../store/actions/user/user'

const NavSide = () => {
    console.log(Icons);
    let 
    let menus = useSelector((state)=> state.user.menus)
    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getMenus())
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