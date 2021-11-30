import { Link } from 'react-router-dom';
import classes from '../Styles/notFound.module.css';

export default function pageNotFound() {
    return (
        <>
            <div className={classes.large}>
                404
            </div>
            <div className={classes.mid}>
                <h1>The page you are looking for was not found.</h1>
            </div>
            <div className={classes.footer}>
                <Link to='/'>Back to Home</Link>
            </div>
            
        </>
    )
}


