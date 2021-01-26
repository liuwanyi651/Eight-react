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
            res.data.goods.map(item => {
                item.key = item.order_id
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
  // 获取商品列表
  export function  getShopGoods(params) {
    return async dispatch =>{}
    let res = await api.getShopGoods(params)
    if (res.meta.status === 200) {
        console.log(res.data);
        // dayjs处理时间
        res.data.goods.map(item => {
            item.new_time = dayjs.unix(item.add_time).format("YYYY-MM-DD HH:mm:ss")
        })
        // Message.success(res.meta.msg)
        commit('setgoodslist', res.data)
    }else {
        Message.error(res.meta.msg);
    }
}