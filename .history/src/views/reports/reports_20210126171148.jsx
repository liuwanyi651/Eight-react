import React,{useEffect} from 'react'
import {getLineChart} from '../../store/actions/report/report'
import { useDispatch, useSelector } from 'react-redux'
 const Reports = (props) => {
    // console.log(props);
    let dispatch = useDispatch()
    let list = const state = useSelector(state => state.state)
    return (
        <div>
            Reports
        </div>
    )
}
export default Reports