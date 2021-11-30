import React from 'react';
import logo from '../assets/images/logo.png';
import calsses from '../Styles/Login.module.css';

function Login() {
    return (
        <>
          <div className={calsses.container}>
            <div className={calsses.wrap}>
                <div className={calsses.left}>
                    <div className={calsses.text}>
                        <h1>Anywhere in the world. <br/>Online test made simple</h1>
                        <h4>Effortless online test taking at your finger tip. Join with milions of other users. Create
                            assign or, take test. Minimalist toolset. Auto evaluation and, many more exciting features.</h4>
                    </div>
                </div>
                <div className={calsses.right}>
                    <div className={calsses.logo}>
                        <div className={calsses.logoTop}>
                            <img src={logo} alt="logo"/>
                        </div>
                        <div className={calsses.log}>
                            <input type="text" placeholder="Username or Email"/>
                            <input type="password" placeholder="Password"/>
                            <button className={calsses.login} onclick="location.href='../profile/profile.html'">Log In</button>
                            <a className={calsses.forgot} href>Forgot Password</a>
                            <p>Or</p>
                            <button className={calsses.logingoogle}><i className="calsses.fab fa-google-plus-g"></i>Log in with Google</button>
                        </div>
                        <div className={calsses.signup}>
                            <p>Don't have an account? <a href="../signup/signup.html">Sign Up</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        </>
    )
}

export default Login
