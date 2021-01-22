import React, { useState,useEffect} from 'react'
import { Layout } from 'antd';
import NavSide from '../../components/navSide/navSide';
import NavHeader from '../../components/navHeader/navHeader';
import NavTop from '../../components/navTop/navTop'
import setnav from './../../until/until'
import {useLocation} from 'react-router-dom'
const {Sider, Content } = Layout;
const Layouts = (props) => {
    let [collapsed, setCollapsed] = useState(false)
    let toggle = (val) => {
        setCollapsed(val)
    }; 
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                {/* 侧边导航组件 */}
                <NavSide></NavSide>
            </Sider>
            <Layout className="site-layout">
                  {/* 头部导航组件 */}
                <NavHeader collapsed={collapsed} toggle={toggle}></NavHeader>
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