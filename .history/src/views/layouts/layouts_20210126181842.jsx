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
           
        </Layout>
    )
}
export default Layouts