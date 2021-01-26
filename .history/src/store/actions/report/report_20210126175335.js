import api from '../../../http/api'
import { message } from 'antd'
// 1.引入 ECharts  >
import echarts from 'echarts'

// 导出多个方法

//权限管理 所有权限列表
export function getLineChart() {
    return async dispatch => {
        let res = await api.getLineChart()
        if (res.meta.status === 200) {
            // console.log(res.data);
            message.success(res.meta.msg)
            let 
            dispatch({
                type:'getLineChart',
                data:res.data
            })
        } else {
            message.error(res.meta.msg)
        }
    }

}