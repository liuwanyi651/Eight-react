import React from 'react'
import { Layout } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
 
const {Header} = Layout;

const NavHeader = (props) => {
    let toggle = () => {
        props.toggle(!props.collapsed)
    }; 
    return (
        <Header className="site-layout-background " style={{ padding: '0 30px', background: '#fff',width:200 }}>
            {
               props.collapsed ?  <MenuUnfoldOutlined onClick={toggle}/> : <MenuFoldOutlined onClick={toggle}/>
            } 
        </Header>
    )
}
export default NavHeader