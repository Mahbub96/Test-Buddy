import React from 'react';
import logo from '../assets/images/logo.png';


function SignupForm() {
    return (
        <div>
            <div className="logo">
                <div className="logoTop">
                    <img src={logo} alt="Logo"/>
                </div>
                <div className="log">
                    <input type="text" placeholder="Full Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Retype Password"/>
                    <button className="login" onclick="location.href='../profile/profile.html'">Sign Up</button>
                    <p>Or</p>
                    <button className="logingoogle"><i className="fab fa-google-plus-g"></i>Sign UP with Google</button>
                </div>
                <div className="signup">
                    <p>Already have an account? <a href="../login/log.html">Log in</a></p>
                </div>
            </div>
        </div>
    )
}

export default SignupForm
