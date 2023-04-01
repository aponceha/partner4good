/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Login.css';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';
// import Auth from '../utils/auth';

const styles = {
    background: {
        overflow: 'scroll'
    }
}

export default function Login() {
    // const [userLogin, setUserLogin] = useState({ email: '', password: '' });
    // const [login, { err, data }] = useMutation(LOGIN_USER);
    // const [loginError, setLoginError] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target
        // setUserLogin({
        //     ...userLogin,
        //     [name]: value,
        // });
    };
    const loginFormHandler = async (e) => {
        e.preventDefault();

        try {
            // const { data } = await login({
            //     variables: { ...userLogin }
            // });
            // Auth.login(data.login.token)
        }
        catch (err) {
            // setLoginError(true);
        }
        // setUserLogin({
        //     email: '',
        //     password: '',
        // });
    };
    return (
        <div className="h-100" style={styles.background}>
            <h2>Login</h2>
            <form className="form" id="login-form" onSubmit={loginFormHandler}>
                <input className="input" placeholder="Email" type="email" id="email-login" onChange={handleChange} />
                <input className="form-input" placeholder="Password" type="password" id="password-login" onChange={handleChange} />

                <div className="form-group">
                    <button className="btn" type="submit" style={{ cursor: 'pointer' }}>Login</button>
                    <a href="/signup" className="btn" style={{ cursor: 'pointer' }}>Create an account</a>
                </div>
            </form>
        </div>
    )
}