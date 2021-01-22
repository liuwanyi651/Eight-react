import React, { useState, useEffect } from 'react'
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
    let [hello,setHello] = useState('')
    let [timer,setTimer] = useState(dayjs().format("YYYY/MM/DD" + " " + " " + "HH:mm:ss"))
    let jump =
    //获取时间
    useEffect(() => {
        if (6 <= dayjs().hour() && dayjs().hour() < 12) {
            setHello("早上好")
        } else if (dayjs().hour() < 14) {
            setHello("中午好")
        } else if (dayjs().hour() < 18) {
            setHello("下午好")
        } else if (dayjs().hour() < 24) {
            setHello("晚上好")
        } else {
            setHello("该睡觉了")
        }
        const id = setInterval(() => {
            setTimer(dayjs().format("YYYY/MM/DD" + " " + hello + " " + "HH:mm:ss"))
        }, 1000);
        return () => clearInterval(id);
    }, [hello])
    return (
        <div className="flex">
            {/* 收缩菜单 */}
            <Header className="site-layout-background " style={{ padding: '0 20px', background: '#fff', width: 50 }}>
                {
                    props.collapsed ? <MenuUnfoldOutlined onClick={toggle} /> : <MenuFoldOutlined onClick={toggle} />
                },
            </Header>
            {/* 左边 时间 天气 */}
            <div style={{ background: '#fff', width: '100%' }}>
                <div className="flexx">
                    <div className="left">欢迎来到小爱后台管理系统！</div>
                    <div className="right flex">
                        <div>{timer}</div>
                        <div className="weather ml20">
                            <iframe
                                width="400"
                                height="26"
                                frameborder="0"
                                scrolling="no"
                                hspace="0"
                                src="https://i.tianqi.com/?c=code&a=getcode&id=40&icon=1"
                            ></iframe>
                        </div>
                        <div className="cb4" onClick={jump}>
                            退出
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavHeader