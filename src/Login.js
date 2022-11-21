import React from 'react';
import './Login.css';
import {accessUrl} from './spotify.js'
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
function Login() {

  return (
    <div className="login">

        <img className="logoImage" src=
                'https://cdn.discordapp.com/attachments/1039205569048883344/1039216224816615504/logo-no-background.png' alt=''></img>
    
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
          onClick={() => logInWithEmailAndPassword(email, password)}
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