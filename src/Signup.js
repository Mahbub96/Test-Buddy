import { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/images/logo.png';
import { signUp } from './firebase';
import Classes from './Styles/Signup.module.css';

function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const RepasswordRef = useRef();
   
    async function handleSignUp(){
        if(passwordRef.current.value === RepasswordRef.current.value){
            try{
                await signUp( emailRef.current.value, passwordRef.current.value );
            }catch(err){
                console.log(err);
            }
        }
        else{
            alert("Recheck your password");
        }
    }

    return (
        <>
            <div className={Classes.container}>
                <div className={Classes.wrap}>
                    <div className={Classes.left}>
                        <div className={Classes.text}>
                            <h1>Anywhere in the world. <br/>Online test made simple</h1>
                            <h4>Effortless online test taking at your finger tip. Join with milions of other users. Create
                                assign or, take test. Minimalist toolset. Auto evaluation and, many more exciting features.</h4>
                        </div>
                    </div>
                    <div className={Classes.right}>
                        <div className={Classes.logo}>
                            <div className={Classes.logoTop}>
                                <Link to='/home'>
                                    <img src={logo} alt="Logo"/>
                                </Link>
                            </div>
                            <div className={Classes.log}>
                                <input type="text" placeholder="Full Name"/>
                                <input type="email" ref={emailRef} placeholder="Email"/>
                                <input type="password" ref={passwordRef} placeholder="Password"/>
                                <input type="password" ref={RepasswordRef} placeholder="Retype Password"/>
                                <Link to='/signup'>
                                    <button onClick={ handleSignUp } className={Classes.login}>Sign Up</button>
                                </Link>
                                <p>Or</p>
                                <Link to='/logWithGoogle'>
                                    <button className={Classes.logingoogle}><i className="fab fa-google-plus-g"></i>Sign UP with Google</button>
                                </Link>
                            </div>
                            <div className={Classes.signup}>
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
