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
        <Header className="site-layout-background" style={{ padding: '0 30px', background: '#fff' }}>
            {
               props.collapsed ?  <MenuUnfoldOutlined onClick={toggle}/> : <MenuFoldOutlined onClick={toggle}/>
            } 
            {
                <div>jkjk</div>
            }
        </Header>
    )
}
export default NavHeader