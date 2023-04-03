/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { NavLink, useNavigate } from 'react-router-dom';
import { SIGNUP_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import './Signup.css';


export default function SignUp() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '', confirmPassword: '' });
  const [signUp, { err, data }] = useMutation(SIGNUP_USER);
  const [signUpError, setSignUpError] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };
  const signUpFormHandler = async (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { data } = await signUp({
        variables: { email: credentials.email, password: credentials.password }
      });
      Auth.login(data.addUser.token);
      navigate('/');
    }
    catch (err) {
      setSignUpError(true);
    }

  };
  return (
    // <div>
    //     <h2>Sign Up</h2>
    //     <form className="form" id="login-form" onSubmit={signUpFormHandler}>
    //         <input className="input" placeholder="Email" type="email" id="email-login" name="email" value={credentials.email} onChange={handleChange} />
    //         <input className="form-input" placeholder="Password" type="password" id="password-login" name="password" value={credentials.password} onChange={handleChange} />
    //         <input className="form-input" placeholder="Password" type="password" id="password-login" name="confirmPassword" value={credentials.confirmPassword} onChange={handleChange} />

    //         <div className="form-group">
    //             <button className="btn" type="submit" style={{ cursor: 'pointer' }}>Sign Up</button>
    //             <NavLink to="/login" className="btn" style={{ cursor: 'pointer' }}>Login</NavLink>
    //         </div>
    //     </form>
    //     {signUpError && <div className="alert alert-danger" role="alert">Login failed. Please check your email and password and try again.</div>}
    // </div>

    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={signUpFormHandler}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Join Partner for Good!</h3>
          Already registered?{" "}
          <span className="link-primary">
            {" "}
            <a href="/login">Sign In</a>
          </span>
          <div className="form-group mt-3"></div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control mt-1"
              placeholder="Email Address"
              value={credentials.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control mt-1"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control mt-1"
              placeholder="Password"
              value={credentials.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>

  )
}