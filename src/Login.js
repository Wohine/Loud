import React from 'react';
import './Login.css';
import {accessUrl} from './spotify.js'
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
function Login() {

  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"

          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          placeholder="Password"
        />
        <button
          className="login__btn"
        >
          Login
        </button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
  );
      </div>
    </div>
  );
}
export default Login;