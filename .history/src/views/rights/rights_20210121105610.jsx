import React,{useEffect} from 'react'
import {getRights} from '../../store/actions/permission/permission'
import {useDispatch,useSelector} from 'react-redux'
export const Rights = (props) => {
    console.log(props);

    let dispatch = useDispatch()
    
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