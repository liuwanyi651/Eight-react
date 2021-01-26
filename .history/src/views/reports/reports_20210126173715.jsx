import React, { useEffect } from 'react'
import { getLineChart } from '../../store/actions/report/report'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from 'antd';
// 1.引入 ECharts  >
import echarts from 'echarts'
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
                
            </Card>
        </div>
    )
}
export default Reports