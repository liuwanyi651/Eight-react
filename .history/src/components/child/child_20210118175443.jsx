import React from 'react'

export const Child = (props) => {
    console.log(props);
    return (
        <div>
            父组件传递过来的数据：{props.name}
        </div>
    )
}

export default Child