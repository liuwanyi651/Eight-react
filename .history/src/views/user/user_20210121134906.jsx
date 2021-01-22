
import React, { useState, useEffect } from 'react'
import { getUsers } from '../../store/actions/user/user'
import { useDispatch, useSelector } from 'react-redux'

export const User = (props) => {
    console.log(props);
    let [pagenum] = useState('1')
    let [pagesize] = useState('2')
    let [query] = useState('')

    let dispatch = useDispatch()
    let selector = useSelector(state => state.user.users)
    useEffect(() => {
        dispatch(getUsers({
            query: "",
            pagenum: pagenum,
            pagesize: this.pagesize,
        }))
    }, [])
    return (
        <div>
            
        </div>
    )
}
export default User