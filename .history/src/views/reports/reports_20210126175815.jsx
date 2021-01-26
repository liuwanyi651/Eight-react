import React, { useEffect } from 'react'
import { getLineChart } from '../../store/actions/report/report'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from 'antd';

const Reports = (props) => {
    // console.log(props);
    let dispatch = useDispatch()
    let list = useSelector(state => state.report.setreports)
    console.log(list);
    useEffect(() => {
        dispatch(getLineChart())
    }, [])
    return (
        <div>
            <Card  style={{ width: 1200,height:450}}>
                <div id></div>
            </Card>
        </div>
    )
}
export default Reports