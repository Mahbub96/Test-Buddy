
import LoginForm from '../components/LoginForm';
import classes from '../Styles/Login.module.css';

// import classes from '../Styles/Login.module.css';


function Login() {
    return (
        <>
           <div className={classes.container}>
                <div className={classes.wrap}>
                    <div className={classes.left}>
                        <div className={classes.pos}>
                            <h1>Anywhere in the world. <br />Online test made simple</h1>
                            <h4>
                            Effortless online test taking at your finger tip. Join with
                            milions of other users. Create assign or, take test. Minimalist
                            toolset. Auto evaluation and, many more exciting features.
                            </h4>
                        </div>   
                    </div>
                    <div className={classes.right}>
                        <LoginForm/>
                    </div>    
                </div>   
            </div> 
        </>
    );
}

export default Login
