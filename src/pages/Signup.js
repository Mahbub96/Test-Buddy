import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Clss from '../Styles/Signup.module.css';

function Signup() {
    return (
        <>
            <div className={Clss.container}>
                <div className={Clss.wrap}>
                    <div className={Clss.left}>
                        <div className={Clss.text}>
                            <h1>Anywhere in the world. <br/>Online test made simple</h1>
                            <h4>Effortless online test taking at your finger tip. Join with milions of other users. Create
                                assign or, take test. Minimalist toolset. Auto evaluation and, many more exciting features.</h4>
                        </div>
                    </div>
                    <div className={Clss.right}>
                        <div className={Clss.logo}>
                            <div className={Clss.logoTop}>
                                <Link to='/home'>
                                    <img src={logo} alt="Logo"/>
                                </Link>
                            </div>
                            <div className={Clss.log}>
                                <input type="text" placeholder="Full Name"/>
                                <input type="email" placeholder="Email"/>
                                <input type="password" placeholder="Password"/>
                                <input type="password" placeholder="Retype Password"/>
                                <Link to='/signup'>
                                    <button className={Clss.login}>Sign Up</button>
                                </Link>
                                <p>Or</p>
                                <Link to='/logWithGoogle'>
                                    <button className={Clss.logingoogle}><i className="Clss.fab fa-google-plus-g"></i>Sign UP with Google</button>
                                </Link>
                            </div>
                            <div className={Clss.signup}>
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
