import React,{useEffect} from 'react'
import {getLineChart} from '../../store/actions/report/report'
import { useDispatch, useSelector } from 'react-redux'
 const Reports = (props) => {
    // console.log(props);
    let dispatch = useDispatch()
    let list = useSelector(state => state.report.setreports)
    useEffect(()=>{
        dispatch(getLineChart)
    },[])
    return (
        <div>
            Reports
        </div>
    )
}
export default Reports