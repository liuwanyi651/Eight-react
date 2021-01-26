import React, { useState,useEffect} from 'react'
import { Layout } from 'antd';
import NavSide from '../../components/navSide/navSide';
import NavHeader from '../../components/navHeader/navHeader';
import NavTop from '../../components/navTop/navTop'
import {setnav} from './../../until/until'
import {useLocation} from 'react-router-dom'
const {Sider, Content } = Layout;
const Layouts = (props) => {
    let location = useLocation()
    let pathname = location.pathname
    let [collapsed, setCollapsed] = useState(false)
    let toggle = (val) => {
        setCollapsed(val)
    }; 
    useEffect(()=>{
        setnav({
            path:pathname,
            meta:{
                title:document.title
            }
        })
    })
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                {/* 侧边导航组件 */}
                <NavSide></NavSide>
            </Sider>
            <Layout className="site-layout">
                  {/* 头部导航组件 */}
                <NavHeader collapsed={collapsed} toggle={toggle}></NavHeader>
                <NavTop></NavTop>
                <Content
                    
                    className="site-layout-background dd"
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