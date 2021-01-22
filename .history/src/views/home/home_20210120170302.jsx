import React from 'react'
import {useLocation} from 'react-router-dom'

export const Home = (props) => {
    console.log(props);
    let location = useLocation()
    console.log(location );
    return (
        <div className="flex  fs30 f-w">
            <div>
                欢迎来到小爱后台管理系统
            =
        </div>
    )
}
export default Home