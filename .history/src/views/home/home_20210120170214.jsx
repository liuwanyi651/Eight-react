import React from 'react'
import {useLocation} from 'react-router-dom'

export const Home = (props) => {
    console.log(props);
    let location = useLocation()
    console.log(location );
    return (
        <div className="m-a fs30 f">
            欢迎来到小爱后台管理系统
        </div>
    )
}
export default Home