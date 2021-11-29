import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import '../Styles/Signup.css';
import Input from './Input';


function SignupForm() {
    const [user,setUser] = useState({
        Name:"",
        Email:"",
        Passwd:"",
        rePasswd:""
      });
    
    
      const getUserData = (event)=>{
        
        let n = event.target.name;
        let v = event.target.value;
        setUser({...user,[n]:v});
      };
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
            <div className="logo">
                <div className="logoTop">
                    <img src={logo} alt="Logo"/>
                </div>
                <div className="log">
                    <form action="">

                        <Input onChange={getUserData} name="Name" value={user.Name} type="text" placeholder="Full Name"/>
                        <Input onChange={getUserData} name="Email" value={user.Email} type="email" placeholder="Email"/>
                        <Input onChange={getUserData} name="Passwd" value={user.Passwd} type="password" placeholder="Password"/>
                        <Input onChange={getUserData} name="rePasswd" value={user.rePasswd} type="password" placeholder="Retype Password"/>
                        <button type="submit" onClick={postData} className="login" onclick="location.href='../profile/profile.html'">Sign Up</button>
                    </form>
                    <p>Or</p>
                    <button className="logingoogle"><i className="fab fa-google-plus-g"></i>Sign UP with Google</button>
                </div>
                <div className="signup">
                    <p>Already have an account? <a href="../login/log.html">Log in</a></p>
                </div>
            </div>
        </>
    )
}

export default SignupForm
