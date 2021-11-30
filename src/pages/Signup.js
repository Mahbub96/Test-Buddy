import React from 'react';
import logo from '../assets/images/logo.png';
import classes from '../Styles/Signup.module.css';
function Signup() {
    return (
        <>
            <div className={classes.container}>
                <div className={classes.wrap}>
                    <div className={classes.left}>
                        <div className={classes.text}>
                            <h1>Anywhere in the world. <br/>Online test made simple</h1>
                            <h4>Effortless online test taking at your finger tip. Join with milions of other users. Create
                                assign or, take test. Minimalist toolset. Auto evaluation and, many more exciting features.</h4>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div className={classes.logo}>
                            <div className={classes.logoTop}>
                                <img src={logo} alt="Logo"/>
                            </div>
                            <div className={classes.log}>
                                <input type="text" placeholder="Full Name"/>
                                <input type="email" placeholder="Email"/>
                                <input type="password" placeholder="Password"/>
                                <input type="password" placeholder="Retype Password"/>
                                <button className={classes.login} onclick="location.href='../profile/profile.html'">Sign Up</button>
                                <p>Or</p>
                                <button className={classes.logingoogle}><i className="classes.fab fa-google-plus-g"></i>Sign UP with Google</button>
                            </div>
                            <div className={classes.signup}>
                                <p>Already have an account? <a href="../login/log.html">Log in</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
