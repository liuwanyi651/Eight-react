import React,{useEffect} from 'react'
import {getLineChart} from '../../store/actions/report/report'
import { useDispatch, useSelector } from 'react-redux'
imp
 const Reports = (props) => {
    // console.log(props);
    let dispatch = useDispatch()
    let list = useSelector(state => state.report.setreports)
    console.log(list);
    useEffect(()=>{
        dispatch(getLineChart())
    },[])
    return (
        <div>
            Reports
        </div>
    )
}
export default Reports