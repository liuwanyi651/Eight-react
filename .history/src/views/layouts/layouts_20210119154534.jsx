import React, { useState } from 'react'
import { Layout } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import NavSide from '../../components/navSide/navSide';

const { Header, Sider, Content } = Layout;
const Layouts = (props) => {
    let [collapsed, setcollapsed] = useState(false)
    let toggle = () => {
        setcollapsed(!collapsed)
    };
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                {/* 侧边导航组件 */}
                <NavSide></NavSide>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0,background:'#fff' }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {/* 主内容 插槽 */}
                    {
                        props.children
                    }
                </Content>
            </Layout>
        </Layout>
    )
}
export default Layouts