import React from 'react'
import {useLocation} from 'react-router-dom'

export const Reports = (props) => {
    console.log(props);
    let location = useLocation()
    console.log(location );
    return (
        <div>
            Reports
        </div>
    )
}
export default Params