import React from 'react'
import {useLocation} from 'react-router-dom'
import {getOrderList} from '../../store/actions/order/order'
import {useDispatch,useSelector} from 'react-redux'
export const Order = (props) => {
    console.log(props);
    let location = useLocation()
    console.log(location );
    return (
        <div>
            Order
        </div>
    )
}
export default Order