/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import './Login.css';
import UserContext from '../../providers/userContext';

const styles = {
  background: {
    overflow: 'scroll'
  }
}

export default function Login() {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: ''
  });
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
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={loginFormHandler}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={userLogin.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={userLogin.password}
              onChange={handleChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="sign-up text-right mt-2">
            Want to Partner? Join us <a href="/signup">here</a>
          </p>
        </div>
      </form>
    </div>
  )
}