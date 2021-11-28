import React from 'react';
import classes from '../Styles/login.modular.css';


function LoginForm() {
    return (
        <div>
            <div className={classes.logo}>
                <div className={classes.logoTop}>
                    <img alt="Logo"/>
                </div>
                <div className={classes.log}>
                    <input type="text" placeholder="Username or Email"/>
                    <input type="password" placeholder="Password"/>
                    <button className={classes.login} onclick="location.href='../profile/profile.html'">Log In</button>
                    <a className={classes.forgot} >Forgot Password</a>
                    <p>Or</p>
                    <button className={classes.logingoogle}><i className="fab fa-google-plus-g"></i>Log in with Google</button>
                </div>
                <div className={classes.signup}>
                    <p>Don't have an account? <a href="../signup/signup.html">Sign Up</a></p>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
