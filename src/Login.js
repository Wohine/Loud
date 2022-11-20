import React from 'react';
import './Login.css';
import {accessUrl} from './spotify.js'

function Login() {
    return(
        <div className='login'>
            <img src=
            'https://cdn.discordapp.com/attachments/1039205569048883344/1039216224816615504/logo-no-background.png' alt=''></img>
            <a href={accessUrl}>LOGG INN ELLER REGISTRER</a>
        </div>
    )
}

export default Login