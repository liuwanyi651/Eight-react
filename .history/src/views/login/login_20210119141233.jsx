import React from 'react'

export const Login = (props) => {
   let login = () =>{
    props.history.push('/')

   }
    return (
        <div>
            <button onClick={login}>登录 </button>
        </div>
    )
}
export default Login