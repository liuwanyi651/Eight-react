import React from 'react'
import {useLocation} from 'react-router-dom'

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
export default Goods