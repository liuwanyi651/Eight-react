import api from '../../../http/api'
import { message } from 'antd'
import dayjs from "dayjs"

// 导出多个方法

//订单列表
export function getOrderList(params) {
    return async dispatch => {
        let res = await api.getOrderList(params)
        if (res.meta.status === 200) {
            //  dayjs转换时间
            res.data.map((item) => {
                item.key = item.id
            })
            res.data.goods.map(item => {
                item.new_time = dayjs.unix(item.create_time).format("YYYY-MM-DD HH:mm:ss")
            })
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
