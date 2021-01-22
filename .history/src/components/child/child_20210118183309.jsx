import React,{useState,forwardRef} from 'react'

export const Child = (props,ref) => {
    // console.log(props);
    let [msg] = useState('子组件的数据')
    let send = () => {
        props.send(msg)
    }
    return (
        <div ref={ref}>
            <div>父组件传递过来的数据：{props.name}</div>
            <div>
                <button onClick={send}>传值给父组件</button>
            </div>
        </div>
    )
}

export default forwardRef(Child)