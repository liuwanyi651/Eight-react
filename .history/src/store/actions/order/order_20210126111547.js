import api from '../../../http/api'
import { message } from 'antd'
import FormItemLabel from 'antd/lib/form/FormItemLabel'

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


