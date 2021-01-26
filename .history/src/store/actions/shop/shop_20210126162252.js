import api from '../../../http/api'
import { message } from 'antd'
import dayjs from "dayjs"

// 导出多个方法
  // 获取商品列表
  export function getShopGoods(params) {
    return async dispatch =>{
        let res = await api.getShopGoods(params)
    if (res.meta.status === 200) {
        console.log(res.data);
        // dayjs处理时间
        res.data.goods.map(item => {
            item.key = item.goods_id
            item.new_time = dayjs.unix(item.add_time).format("YYYY-MM-DD HH:mm:ss")
        })
        // message.success(res.meta.msg)
        // commit('setgoodslist', res.data)
        dispatch({
            type:'getShopGoods',
            data:res.data
        })
    }else {
        message.error(res.meta.msg);
    }
    }
}

 //商品分类数据列表
 export function getgoodslist( params) {
     return async dispatch =>{
        let res = await api.getgoods(params);
    if (res.meta.status === 200) {
        console.log(res.data)
        res.data.result.
        // commit("setgoods", res.data);
        dispatch({
            type:'getgoodslist',
            data:res.data
        })
    } else {
        message.error(res.meta.msg);
    }
     }
    
}
