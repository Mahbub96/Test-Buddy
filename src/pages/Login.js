import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import classes from '../Styles/Login.module.css';

function Login() {
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
                            <img src={logo} alt="logo"/>
                        </div>
                        <div className={classes.log}>
                            <input type="text" placeholder="Username or Email"/>
                            <input type="password" placeholder="Password"/>
                            <Link to='/home' >
                                <button className={classes.login} onclick="location.href='../profile/profile.html'">Log In</button>
                            </Link>
                            <Link to='/notFound'>
                                <a className={classes.forgot} href>Forgot Password</a>
                            </Link>
                            <p>Or</p>
                            <Link to='/logWithGoogle'>
                                <button className={classes.logingoogle}><i className="classes.fab fa-google-plus-g"></i>Log in with Google</button>
                            </Link>
                        </div>
                        <div className={classes.signup}>
                            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        </>
    )
}

export default Login
