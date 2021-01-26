import api from '../../../http/api'
import { message } from 'antd'
import dayjs from "dayjs"

// 导出多个方法
// 获取商品列表
export function getShopGoods(params) {
    return async dispatch => {
        let res = await api.getShopGoods(params)
        if (res.meta.status === 200) {
            console.log(res.data);
            // dayjs处理时间
            res.data.goods.map(item => {
                item.key = item.goods_id
                item.new_time = dayjs.unix(item.add_time).format("YYYY-MM-DD HH:mm:ss")
            })
            // message.success(res.meta.msg)
            dispatch({
                type: 'getShopGoods',
                data: res.data
            })
        } else {
            message.error(res.meta.msg);
        }
    }
}

//权限管理 所有权限列表
export function getLineChart() {
    return async dispatch => {
        let res = await api.getLineChart()
        if (res.meta.status === 200) {
            console.log(res);
            // commit('setreports', res.data)
            message.success(res.meta.msg)
        } else {
            message.error(res.meta.msg)
        }
    }

}