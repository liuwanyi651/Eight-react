import React,{useEffect} from 'react'
import {getRights} from '../../store/actions/permission/permission'
import {useDispat}
export const Rights = (props) => {
    console.log(props);

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