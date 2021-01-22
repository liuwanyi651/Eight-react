import React, { useState , useEffect,useRef} from 'react'
// {useState} 官方提供的定义数据的方法
import './App.css'
import Child from './components/child/child'


const App = (props) => {
  let [name, setName] = useState('jack')
  let send = (val) => {
    console.log(val);
    console.log(dv.current));
  }
  let dv = useRef(null) //useRef 获取dom元素 和 实例 默认值为null
  // mounted  只有一个生命周期 useEffect这个函数 第一个参数是回调函数 第二个是空数组等同于useEffect
  useEffect(()=>{
    // 1.发请求
    // 2.数据初始化
    console.log('effect');
    // 组件销毁
    return () =>{
      // 清除定时器
    }
  },[])
  return (
    <>
      <Child name={name} send={send}></Child>
      <div>123</div>
    </>
  )
}


// 渲染路由
// const App = () => {
//   let [name, setName] = useState('jack')
//   let [age, setAge] = useState(10)
//   let [activeIndex,setActiveIndex] = useState(-1)
//   let [arr, setArr] = useState([
//     {
//       name: '苹果'
//     },
//     {
//       name: '香蕉'
//     },
//     {
//       name: '橘子'
//     },
//   ])
//   let update = () => {
//     console.log(111);
//     setName('tom')
//     setAge(20)
//   }
//   let clickItem = (item,index) =>{
//     setActiveIndex(index)
//     console.log(item);
//     console.log(index);
//   }
//   return (
//     <div>
//       {/* <div style={{height:200}}> {name}---{age}</div>
//       <div>
//         <button onClick={update}>update</button>
//       </div> */}
//       {
//         arr.map((item, index) => {
//           return (
//             <div key={index} onClick ={()=>clickItem(item,index)} 
//             className={`app-box ${activeIndex === index ? 'app-active' : ''}`}>
//               {item.name}
//             </div>
//           )
//         })
//       }
//       {/* {
//         age >10 ? <div>age大于10</div> : null
//       } */}
//     </div>
//   )
// }

export default App 