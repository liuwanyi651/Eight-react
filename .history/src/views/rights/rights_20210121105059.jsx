import React from 'react'
import {useLocation} from 'react-router-dom'
import {} from ''
export const Rights = (props) => {
    console.log(props);
    let location = useLocation()
    console.log(location );
    return (
        <div>
            Rights
        </div>
    )
}
export default Rights