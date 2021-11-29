import Left from '../components/Left';
import PreLoginRight from '../components/PreLoginRight';
import '../Styles/App.css';
import '../Styles/Prelogin.css';
import classes from '../Styles/Prelogin.module.css';



export default function PreLogin(){

    return(
        
        <>
            <div className="container">
                <div className={`wrap ${classes.height}`}>
                    <div className={` ${classes.bg} left`}>
                        <Left/>
                    </div>
                    <div className="right">
                        <PreLoginRight/>
                    </div>
                </div>
            </div>
        </>
    );
    
}