import api from '../../../http/api'
import { message } from 'antd'

// 导出多个方法
//订单列表
export function getOrderList(params) {
    return async dispatch => {
        let res = await api.getOrderList(params)
        if (res.meta.status === 200) {
            message.success(res.meta.msg)
            console.log(res.data);
            dispatch({
                type:'getOrderList',
                data:res.data
            })
        }else{
            message.error(res.meta.msg)
        }
    }
}
