import React,{useEffect}from 'react'
import {getOrderList} from '../../store/actions/order/order'
import {useDispatch,useSelector} from 'react-redux'
export const Order = (props) => {
    console.log(props);

    let dispatch = useDispatch()
    let list = useSelector(state=> state.order)
    return (
        <div>
            Order
        </div>
    )
}
export default Order