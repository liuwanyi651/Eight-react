
import React,{useState,useEffect} from 'react'
import {getUsers} from '../../store/actions/user/user'
import {useDispatch,useSelector} from 'react-redux'

export const User = (props) => {
    console.log(props);
    let [pagenum,setPagenum] = useState(1)
    let [pagesize,setPagesize] = u
    let dispatch = useDispatch()
    let selector = useSelector(state =>state.user.users)
    useEffect(()=>{
        dispatch(getUsers())
    },[])
    return (
        <div>
            User
        </div>
    )
}
export default User