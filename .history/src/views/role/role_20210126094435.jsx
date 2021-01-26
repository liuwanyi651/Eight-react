import React,{useEffect} from 'react'
import {getRoles} from '../../store/actions/permission/permission'
import {useDispatch,useSelector} from 'react-redux'
 const Role = (props) => {
    // console.log(props);
    let dispatch = useDispatch()
    // 赋值给list
    let list = useSelector(state => state.permission.setroles)
    console.log(list);
    // 初始化调用
    useEffect(()=>{
        dispatch(getRoles())
    },[])
    return (
        <div>
            Role
        </div>
    )
}
export default Role