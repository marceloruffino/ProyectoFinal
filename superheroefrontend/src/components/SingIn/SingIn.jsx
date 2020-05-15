import React from 'react';
import './SingIn.css';
import { LockOutlined } from '@ant-design/icons';


export default function SignIn() {
  return (
    <div className="login-dark img-fluid">
        <form method="post">
            <h2 className="sr-only">Login Form</h2>
            <div className="illustration">
                <LockOutlined />
            </div>
            <div className="form-group">
                <input className="form-control" 
                type="email" 
                name="email" 
                placeholder="Email"></input>
                
            </div>
            <div className="form-group">
                <input className="form-control" 
                type="password" 
                name="password" 
                placeholder="Password"></input>
                
                </div>
            <div className="form-group">
                <button className="btn btn-primary btn-block" 
                type="submit">Log In
                </button>
            </div>
            <a href="#" 
            class="forgot">Forgot your email or password?
            </a>
        </form>
    </div>
  );
}
