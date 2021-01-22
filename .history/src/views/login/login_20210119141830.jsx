import React from 'react'
import { useHistory } from 'react-router-dom'

export const Login = (props) => {
    let history = useHistory()
    let login = () => {
        props.history.push('/')

    }
    return (
        <div>
            <button onClick={login}>登录 </button>
        </div>
    )
}
export default Login