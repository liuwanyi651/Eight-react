import api from '../../../http/api'
import {message} from 'antd'
import { authRoutes,parentRoutes } from '../../../router'


// 导出多个方法
// 登录
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

// 左侧菜单权限请求
export function getMenus() {
    return async dispatch => {
      let res = await api.getMenus()
      if (res.meta.status === 200) {  
        res.data.map(item => {
            // 循环 给一级菜单加图标 
          parentRoutes.map(item1 => {
            //   拼接/
            if (item1.path === ('/' + item.path)) {
              item.icon = item1.icon
            }
          })
          //二级菜单
          if (item.children && item.children.length) {
            item.children.map(child => {
              authRoutes.map(item2 => {
                if ((`/${item.path}/${child.path}`) === item2.path) {
                  child.icon = item2.meta.icon
                  child.key = `/${item.path}/${child.path}`
                }
              })
            })
          }
        })
        res.data.unshift({
          path: '/',
          key: '/',
          authName: '首页',
          icon: 'HomeOutlined'
        })
        console.log(res.data)
        return dispatch({
          type: 'getMenus',
          data: res.data
        })
      }
    }
  }
// 用户数据列表
export function getUsers(params){
  return async (dispatch)=>{
    let res = await api. getUsers(params)
    console.log(res)
    if (res.meta.status === 200) {
      console.log(res);
      commit('setUsers', res.data)
    } else {
      message.error(res.meta.msg)
    }
  }
}