import React, { useState } from 'react'
// {useState} 官方提供的定义数据的方法
import './App.css'
const App = () => {
  let [name, setName] = useState('jack')
  let [age, setAge] = useState(10)
  let [arr, setArr] = useState([
    {
      name: '苹果'
    },
    {
      name: '香蕉'
    },
    {
      name: '橘子'
    },
  ])
  let update = () => {
    console.log(111);
    setName('tom')
    setAge(20)
  }
  let clickItem = (item,index) =>{
    console.log(item);
    console.log(index);
  }
  return (
    <div>
      {/* <div style={{height:200}}> {name}---{age}</div>
      <div>
        <button onClick={update}>update</button>
      </div> */}
      {
        arr.map((item, index) => {
          return (
            <div key={index} onClick ={()=>clickItem(item,index)} className={`app-box`}>
              {item.name}
            </div>
          )
        })
      }
      {/* {
        age >10 ? <div>age大于10</div> : null
      } */}
    </div>
  )
}

export default App 