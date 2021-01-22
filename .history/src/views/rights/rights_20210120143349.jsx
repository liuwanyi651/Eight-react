import React from 'react'
import {useLocation} from 'react-router-dom'

export const Reports = (props) => {
    console.log(props);
    let location = useLocation()
    console.log(location );
    return (
        <div>
            Rights
        </div>
    )
}
export default Reports