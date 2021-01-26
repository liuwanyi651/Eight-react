import React,{use,useEffect}from 'react'
import {getOrderList} from '../../store/actions/order/order'
import {useDispatch,useSelector} from 'react-redux'
 const Order = (props) => {
    console.log(props);

    let dispatch = useDispatch()
    let list = useSelector(state=> state.order.setlist)
     // 定义数据
  let [queryInfo, setQueryInfo] = useState({ pagenum: '1', pagesize: '2', query: '' })
    useEffect(()=>{
        dispatch(getOrderList())
    },[])
    return (
        <div>
            Order
        </div>
    )
}
export default Order