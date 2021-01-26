import api from '../../../http/api'
import { message } from 'antd'


//获取树状菜单
export function getpowerstree() {
    return async dispatch => {
        let res = await api.getpowerstree()
        if (res.meta.status === 200) {

            console.log(res.data)
            return dispatch({
                type: 'getpowerstree',
                data: res.data
            })
        }
    }
}
//权限管理
export function getroles() {
    return async dispatch => {
        let res = await api.getroles()
        if (res.meta.status === 200) {
            res.data.map((item) => {
                item.key = item.id
                item.children.map((item1, index1) => {
                    if (item1.children.length) {
                        item1.key = index1
                        item1.children.map((item2, index2) => {
                            item2.key = index2
                            item2.children.map((item3) => {
                                item3.key = item3.id
                            })
                        })
                    }
                    JSON.parse(JSON.stringify(item).replace('children', 'children1'))
                })

            })

            console.log(res.data, 1111)
            return dispatch({
                type: 'getroles',
                data: res.data
            })
        }
    }
}