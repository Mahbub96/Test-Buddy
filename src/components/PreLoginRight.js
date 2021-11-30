import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import classes from '../Styles/Prelogin.module.css';

function PreLoginRight() {
    return (
        <>
          <div className={classes.logo}>
            <div className={classes.logoTop}>
              <img src={logo} alt="logo" />
              <h2><span>Test</span><span>Buddy</span></h2>
            </div>
            <p>Remote Test Made Simple</p>
          </div>
          <div className={classes.btn}>
            <Link to='/login'>
                  <button className={classes.btn1}>
                Sign In
              </button>
            </Link>
            <br />
            <Link to='/signup'>
              <button className={classes.btn2}>
                Create new account
              </button>
            </Link>
          </div>
          <p className={classes.moral}>Join with millions of others</p>

        </>
    )
}

export default PreLoginRight
