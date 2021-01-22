import React,{useEffect} from 'react'
import {getRights} from '../../store/actions/permission/permission'

export const Rights = (props) => {
    console.log(props);
    let location = useLocation()
    console.log(location );

    useEffect(()=>{
        dispatch(getRights())
    },[])
    return (
        <div>
            Rights
        </div>
    )
}
export default Rights