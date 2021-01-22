import React,{useEffect} from 'react'
import {getRights} from '../../store/actions/permission/permission'
import {useDispatch,useSelector} from 'react-redux'
export const Rights = (props) => {
    // console.log(props);

    let dispatch = useDispatch()
    let selector = useSelector(state => state.permission.rights)
    console.log(selector);
    useEffect(()=>{
        dispatch(getRights())
    },[])
    return (
        <div>
            {selector.authName}
        </div>
    )
}
export default Rights