import React from 'react';
import Left from '../components/Left';
import SignupForm from '../components/SignupForm';
import '../Styles/Signup.css';


function Signup() {
    return (
        <div>
            <div className="container">
                <div className="wrap">
                    <div className="left">
                        <Left/>
                    </div>
                    <div className="right">
                        <SignupForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
