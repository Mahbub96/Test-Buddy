import PreLoginRight from '../components/PreLoginRight';
import classes from '../Styles/Prelogin.module.css';


function PreLogin() {
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.wrap}>
                    <div className={classes.left}>
                        <div className={classes.text}>
                            <h1>Anywhere in the world. <br />Online test made simple</h1>
                            <h4>
                            Effortless online test taking at your finger tip. Join with
                            milions of other users. Create assign or, take test. Minimalist
                            toolset. Auto evaluation and, many more exciting features.
                            </h4>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <PreLoginRight/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreLogin
