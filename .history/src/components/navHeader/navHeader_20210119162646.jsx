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
        <Header className="site-layout-background" style={{ padding: '0 20px', background: '#fff' }}>
            {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggle,
            })}
            {/* {
               props.collapsed ?  <MenuUnfoldOutlined/> : <MenuFoldOutlined/>
            } */}

        </Header>
    )
}
export default NavHeader