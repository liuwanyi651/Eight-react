import React from 'react'

export const Login = (props) => {
    props.history.push('/')

    return (
        <div>
            <button onClick={login}>登录 </button>
        </div>
    )
}
export default Login