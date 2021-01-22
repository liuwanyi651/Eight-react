import React from 'react'
import { Layout } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
 
const {Header} = Layout;

const NavHeader = (props) => {
    // let toggle = () => {
    //     props.toggle(!props.collapsed)
    // }; 
    return (
        <Header className="site-layout-background" style={{ padding: 0, background: '#fff' }}>
            {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                // onClick: toggle,
            })}
        </Header>
    )
}
export default NavHeader