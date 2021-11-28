import '../Styles/App.css';
import Left from '../components/Left';
import PreLoginRight from '../components/PreLoginRight';

export default function PreLogin(){

    return(
        
        <>
            <div className="container">
                <div className="wrap">
                    <div className="left">
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