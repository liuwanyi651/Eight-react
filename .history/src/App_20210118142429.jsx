import React , {useState}from 'react'
// {useState} 官方提供的定义数据的方法
const App = () =>{
  let [name,setName] = useState('jack')
  let [age,setAge] = useState(10)

  return (
    <div>
      {name}---{age}
    </div>
  )
}

export default App 