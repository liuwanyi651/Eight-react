import React from 'react'
import {useLocation} from 'react-router-dom'

export const Goods = (props) => {
    console.log(props);
    let location = useLocation()
    console.log(location );
    return (
        <div>
            Goods
        </div>
    )
}
export default Goods