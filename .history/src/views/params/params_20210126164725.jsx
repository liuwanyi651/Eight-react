import React from 'react'
import {useLocation} from 'react-router-dom'

const Params = (props) => {
    console.log(props);
    let location = useLocation()
    console.log(location );
    return (
        <div>
            Params
        </div>
    )
}
export default Params