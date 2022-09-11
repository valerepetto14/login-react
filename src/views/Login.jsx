import React from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios'

import '../styles/login.css'

const Login = () => {

    const login_function =  async (user, pass) => {
        try {
            const response = await await axios({
                                method: 'post',
                                url: 'http://54.94.125.72:3000/login',
                                data: {
                                user: user,
                                pass: pass
                                }})
            window.localStorage.setItem(token, response.data.token)
        } catch (error) {
            if (error.response.status == 401) {
                nashe
            }
        }
    }
    return (
        <form onSubmit={login_function} className="login">
            <h1>Login</h1>
            <input placeholder="  Username"></input>
            <input placeholder="  Password"></input>
            <Button>Login</Button>
        </form>
    )
}

export default Login