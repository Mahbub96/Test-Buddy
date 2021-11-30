import { Link } from 'react-router-dom';

function UnterConstraction() {
    return (
        <>
            <div style={{fontSize:'30px'}}>
                This page is under Development...
                You had better use another website :v 
            </div>
            <Link to='/home' style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'20px 0'}}>Back to Home Page</Link>
            
        </>
    )
}

export default UnterConstraction
