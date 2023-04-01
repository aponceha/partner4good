/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import './Login.css';

const styles = {
    background: {
        overflow: 'scroll'
    }
}

export default function Login() {
    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState({ email: '', password: '' });
    const [login, { err, data }] = useMutation(LOGIN_USER);
    const [loginError, setLoginError] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target
        setUserLogin({
            ...userLogin,
            [name]: value,
        });
    };
    const loginFormHandler = async (e) => {
        e.preventDefault();

        try {
            const { data } = await login({
                variables: { ...userLogin }
            });
            Auth.login(data.login.token);
            navigate('/');
        }
        catch (err) {
            setLoginError(true);
        }

    };
    return (
        <div className="h-100" style={styles.background}>
            <h2>Login</h2>
            <form className="form" id="login-form" onSubmit={loginFormHandler}>
                <input className="input" placeholder="Email" type="email" id="email-login" name="email" value={userLogin.email} onChange={handleChange} />
                <input className="form-input" placeholder="Password" type="password" id="password-login" name="password" value={userLogin.password} onChange={handleChange} />

                <div className="form-group">
                    <button className="btn" type="submit" style={{ cursor: 'pointer' }}>Login</button>
                    <Link to="/signup" className="btn" style={{ cursor: 'pointer' }}>Create an Account</Link>
                </div>
            </form>
            {loginError && <div className="alert alert-danger" role="alert">Login failed. Please check your email and password and try again.</div>}
        </div>
    )
}