import React,{useEffect} from 'react'
import {getRights} from '../../store/actions/permission/permission'
import {useDispatch,useSelector} from 'react-redux'
export const Rights = (props) => {
    console.log(props);

    let dispatch = useDispatch()
    // let selector = useSelector()
    useEffect(()=>{
        dispatch(getRights())run 
    },[])
    return (
        <div>
            Rights
        </div>
    )
}
export default Rights