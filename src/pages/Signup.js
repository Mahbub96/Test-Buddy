import { Link } from 'react-router-dom';
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
                                <Link to='/home'>
                                    <img src={logo} alt="Logo"/>
                                </Link>
                            </div>
                            <div className={classes.log}>
                                <input type="text" placeholder="Full Name"/>
                                <input type="email" placeholder="Email"/>
                                <input type="password" placeholder="Password"/>
                                <input type="password" placeholder="Retype Password"/>
                                <Link to='/signup'>
                                    <button className={classes.login}>Sign Up</button>
                                </Link>
                                <p>Or</p>
                                <Link to='/logWithGoogle'>
                                    <button className={classes.logingoogle}><i className="classes.fab fa-google-plus-g"></i>Sign UP with Google</button>
                                </Link>
                            </div>
                            <div className={classes.signup}>
                                <p>Already have an account? <Link to='/login'>Log in</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
