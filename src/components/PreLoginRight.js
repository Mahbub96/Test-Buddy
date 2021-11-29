import React from 'react'
import logo from '../assets/images/logo.png'

function PreLoginRight() {
    return (
        <>
            <div className="logo">
            <div className="logoTop">
              <img src={logo} alt="logo" />
              <h2><span>Test</span><span>Buddy</span></h2>
            </div>
            <p>Remote Test Made Simple</p>
          </div>
          <div className="btn">
            <button onclick="location.href='./login/log.html'" className="btn1">
              Sign In
            </button>
            <br />
            <button onclick="location.href='./signup/signup.html'" className="btn2">
              Create new account
            </button>
          </div>
          <p className="moral">Join with millions of others</p>
        </>
    )
}

export default PreLoginRight
