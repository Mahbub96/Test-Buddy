import Left from '../components/Left';
import LoginForm from '../components/LoginForm';
import '../Styles/Login.css';
// import classes from '../Styles/Login.module.css';


function Login() {
    return (
        <>
           <div className="container">
                <div className="wrap">
                    <div className={`  left`}>
                        <Left/>    
                    </div>
                    <div className="right">
                        <LoginForm/>
                    </div>    
                </div>   
            </div> 
        </>
    );
}

export default Login
