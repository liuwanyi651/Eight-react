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
            <div class="flex">
    <div class="left">欢迎来到小爱后台管理系统！</div>
    <div class="right">
       <div>{{ timer }} {{ hi }}{{time}}</div>
      <!--<div>{{ time }}</div>-->
      <!--天气--->
      <div class="weather">
        <iframe
          width="400"
          height="32"
          frameborder="0"
          scrolling="no"
          hspace="0"
          src="https://i.tianqi.com/?c=code&a=getcode&id=40&icon=1"
        ></iframe>
      </div>
      <div>
        亲爱的,{{ user.username }}
        <span class="cb4">退出</span>
      </div>
    </div>
  </div>
            </div>
        </div>
    )
}
export default NavHeader