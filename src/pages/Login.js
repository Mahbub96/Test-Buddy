import React from 'react';
import Left from '../components/Left';
import LoginForm from '../components/LoginForm';

function Login() {
    return (
        <div>
           <div className="container">
                <div className="wrap">
                    <div className="left">
                        <Left/>    
                    </div>
                    <div className="right">
                        <LoginForm/>
                    </div>    
                </div>   
            </div> 
        </div>
    );
}

export default Login
