import React from 'react'
import {useLocation} from 'react-router-dom'

export const Goods = (props) => {
    console.log(props);
    let location = useLocation()
    console.log(location );
    return (
        <div>
            Category
        </div>
    )
}
export default Category