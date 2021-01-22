import React, { useState, useEffect } from 'react'
import { Layout, } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,

} from '@ant-design/icons';
const { Header, } = Layout;
export const Navheader = (props) => {

    let dayjs = require('dayjs');
    let [hell, sethell] = useState('')
    let [time, setdata] = useState(dayjs().format("YYYY/MM/DD" + " " + " " + "HH:mm:ss"))
    //获取时间
    useEffect(() => {
        if (6 <= dayjs().hour() && dayjs().hour() < 12) {
            sethell("早上好")
        } else if (dayjs().hour() < 14) {
            sethell("中午好")
        } else if (dayjs().hour() < 18) {
            sethell("下午好")
        } else if (dayjs().hour() < 24) {
            sethell("晚上好")
        } else {
            sethell("该睡觉了")
        }
        const id = setInterval(() => {
            setdata(dayjs().format("YYYY/MM/DD" + " " + hell + " " + "HH:mm:ss"))
        }, 1000);
        return () => clearInterval(id);

    }, [hell])
    //获取天气




    let toggle = () => {
        props.toggle(!props.collapsed)
    };
    return (
        <div className='j-b' style={{ background: "#fff" }}>

            <div >
                <Header className="site-layout-background" style={{ padding: '0 20px', background: "#fff" }}>
                    {
                        props.collapsed ? < MenuUnfoldOutlined onClick={toggle} /> : <MenuFoldOutlined onClick={toggle} />
                    }

                </Header>
            </div>
            <div className='j-a' style={{ width: '780px', height: '60px', background: "#fff", textAlign: 'center', lineHeight: '60px' }}>
                <div>
                    时间:{time}
                </div>
                <div className="weather">
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
                    退出
                </div>

            </div>


        </div>
    )
}
export default Navheader