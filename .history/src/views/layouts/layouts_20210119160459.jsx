import React, { useState } from 'react'
import { Layout } from 'antd';
import NavSide from '../../components/navSide/navSide';
import NavHeader from '../../components/navHeader/navHeader';

const {Sider, Content } = Layout;
const Layouts = (props) => {
    let [collapsed, setcollapsed] = useState(false)
    
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                {/* 侧边导航组件 */}
                <NavSide></NavSide>
            </Sider>
            <Layout className="site-layout">
                  {/* 头部导航组件 */}
                <NavHeader collapsed={collapsed}></NavHeader>
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