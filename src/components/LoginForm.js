import { useState } from 'react';
import logo from '../assets/images/logo.png';
import classes from '../Styles/Login.module.css';
import Input from './Input';




function LoginForm() {
    const [user,setUser] = useState({
        userId:'',
        passwd:''
      });
    
    
      const getUserData = (event)=>{
        
        let n = event.target.name;
        let v = event.target.value;
        setUser({...user,[n]:v});
      };

    //   Form validation
      const postData = e =>{
        if(user.Name && user.Email && user.Passwd && user.rePasswd){
            alert("Success!");
            e.preventDefault();
            console.log(user);
            setUser({
                Name:"",
                Email:"",
                Passwd:"",
                rePasswd:""
            });
        }else{
            e.preventDefault();
            
            alert("Please Fill the form")
        }
      }

    return (
        <>
            <div className={classes.logo}>
                <div className={classes.logoTop}>
                    <img src={logo} alt="Logo"/>
                </div>
                <div className={classes.log}>
                    <form action="#" method="post">
                        <Input onChange={getUserData} name="userId" value={user.userId} type="text" placeholder="Username or Email"/>
                        <Input onChange={getUserData} name="passwd" value={user.passwd} type="password" placeholder="Password"/>

                        <button type="submit" className={classes.login} onClick={postData}>Log In</button>
                    </form>
                    <a className={classes.forgot} href >Forgot Password</a>
                    <p>Or</p>
                    <button className={classes.logingoogle}><i className="fab fa-google-plus-g"></i>Log in with Google</button>
                </div>
                <div className={classes.signup}>
                    <p>Don't have an account? <a href="../signup/signup.html">Sign Up</a></p>
                </div>
            </div>
        </>
    )
}

export default LoginForm
