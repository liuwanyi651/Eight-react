import api from '../../../http/api'
import { message } from 'antd'

// 导出多个方法
//权限管理 所有权限列表  list 列表显示权限
export function getRights(params) {
    return async dispatch => {
        let res = await api.getRights(params)
        // console.log(res.data)
        if (res.meta.status === 200) {
            res.data.map((item)=>{
                item.key=item.id
              })
            // console.log(res.data)
            message.success(res.meta.msg)
            // 提交reducers
            dispatch({
                type: 'getRights',
                data: res.data
            })
        } else {
            message.error(res.meta.msg)
        }
    }
}

// 角色列表
export function getRoles() {
    return async (dispatch )=> {
        let res = await api.getRoles()
        if (res.meta.status === 200) {
              
            res.data.map((item)=>{
                item.key=item.id
                item.children.map((item1,index1)=>{
                    if(item1.children.length){
                        item1.key=item1.id
                        item1.children.map((item2,index2)=>{
                            item2.key =item2.id
                            item2.children.map((item3)=>{
                                item3.key =item3.id
                            })
                        })
                    }
                    // JSON.parse(JSON.stringify(item).replace('children', 'children1'))
                })
            })
            console.log(res.data); 
            message.success(res.meta.msg)
            // 提交reducers
            dispatch({
                type: 'getRoles',
                data: res.data
            })
        } else {
            message.error(res.meta.msg)
        }
    }
}

 //权限管理 所有权限列表 tree 树状显示权限
 export function  getRightsTree(params) {
    return async (dispatch )=>{
        let res = await api.getRightsTree(params)
        if (res.meta.status === 200) {
          console.log(res.data);
        //   commit("setrightstree", res.data)
        message.success(res.meta.msg)
        // 提交reducers
        dispatch({
            type: 'getRoles',
            data: res.data
        })
        } else {
            message.error(res.meta.msg)
        }
    }
   
  }
