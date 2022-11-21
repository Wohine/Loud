import React from 'react';
import './Welcome.css';
import { Link } from "react-router-dom";


function Welcome() {

    return(
        <div className='login'>
            <img src=
            'https://cdn.discordapp.com/attachments/1039205569048883344/1039216224816615504/logo-no-background.png' alt=''></img>
            <Link to="/login">Log in or create user</Link>
        </div>
    )
}

export default Welcome