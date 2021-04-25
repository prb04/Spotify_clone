import React from 'react';
import { loginURL } from '../../spotify';
import "./Login.css";

function Login() {
    return (
        <div className="login">
        {/* {spotify logo} */}    
        <img 
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt=""
        />
        {/* Login Button */}
        <a href={loginURL}>Login with Spotify</a>
        </div>
    );
}

export default Login;
