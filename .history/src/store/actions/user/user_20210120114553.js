import api from '../../../http/api'
import {message} from 'antd'
import { authRoutes } from '../../../router'

let renderIcon = (data)=>{
    data.map(item =>{
        authRoutes.map(item1 =>{
            if (item1.path === item.path){
                item1.icon=item.icon
                if(item.ch)
            }
        })
    })
}
// 导出多个方法
export function login(params) {
    //发请求
    return async (dispatch) =>{
        let res = await api.login(params)
        console.log(res)
        if(res.meta.status === 200 ){
            localStorage.setItem('token',res.data.token)
            localStorage.setItem('user',JSON.stringify(res.data))
            message.success('登录成功')
            window.location.pathname='/'
            // 提交reducers
            dispatch({
                type:'login'
            })
        }
    }
}

export function getMenus(){
    //发请求
    return async (dispatch) =>{
        let res = await api.getMenus()
        if(res.meta.status === 200 ){
            renderIcon(res.data)
            // 提交reducers
            dispatch({
                type:'getMenus',
                data:res.data
            })
        }
    }
}
