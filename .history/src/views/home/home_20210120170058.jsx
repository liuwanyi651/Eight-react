import React from 'react'
import {useLocation} from 'react-router-dom'

export const Home = (props) => {
    console.log(props);
    let location = useLocation()
    console.log(location );
    return (
        <div>
            欢迎来到
        </div>
    )
}
export default Home