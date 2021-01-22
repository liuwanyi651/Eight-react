import React, { useState } from 'react'
// {useState} 官方提供的定义数据的方法
const App = () => {
  let [name, setName] = useState('jack')
  let [age, setAge] = useState(10)
  let update = () =>{
    console.log(111);
    setName('tom')
    setAge(20)
  }
  return (
    <div>
      <div style={{height:200}}> {name}---{age}</div>
      <div>
        <button onClick={update}>update</button>
      </div>
    </div>
  )
}

export default App 