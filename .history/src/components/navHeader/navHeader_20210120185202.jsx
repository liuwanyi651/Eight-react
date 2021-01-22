import React from 'react'
import { Layout } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import dayjs from "dayjs"

const { Header } = Layout;

const NavHeader = (props) => {

    let toggle = () => {
        props.toggle(!props.collapsed)
    };
    let [timer,setimer] 
    return (
        <div className="flex">
            {/* 收缩菜单 */}
            <Header className="site-layout-background " style={{ padding: '0 20px', background: '#fff',width:50 }}>
                {
                    props.collapsed ? <MenuUnfoldOutlined onClick={toggle} /> : <MenuFoldOutlined onClick={toggle} />
                },
            </Header>
            {/* 左边 时间 天气 */}
            <div style={{ background: '#fff',width:'100%'}}>
               <div className="flexx">
                    <div className="left">欢迎来到小爱后台管理系统！</div>
                    <div className="right">
                        <div>时间：</div>
                    </div>
               </div>
            </div>
        </div>
    )
}
export default NavHeader