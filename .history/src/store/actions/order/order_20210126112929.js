import api from '../../../http/api'
import { message } from 'antd'
import dayjs from "dayjs"

// 导出多个方法
//权限管理 所有权限列表  list 列表显示权限
export function getRights(params) {
    return async dispatch => {
        let res = await api.getRights(params)
        // console.log(res.data)
        if (res.meta.status === 200) {
            res.data.map((item) => {
                item.key = item.id
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

//订单列表
export function getOrderList(params) {
    return async dispatch => {
        let res = await api.getOrderList(params)
        if (res.meta.status === 200) {
            //  dayjs转换时间
            res.data.goods.map(item => {
                item.new_time = dayjs.unix(item.create_time).format("YYYY-MM-DD HH:mm:ss")
            })
            message.success(res.meta.msg)
            console.log(res.data);
            // commit('setlist', res.data)
            dispatch
        }else{
            message.error(res.meta.msg)
        }
    }
}
