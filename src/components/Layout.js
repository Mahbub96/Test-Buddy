import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../pages/Login';
import PreLogin from '../pages/PreLogin';
import Profile from '../pages/Profile';
import Signup from '../pages/Signup';


function Layout() {
    return ( 
        <Router>
            <Routes>
                <Route path='/' element={<PreLogin/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/home' element={<Profile/>} />
            </Routes>
        </Router>
    )
}

export default Layout
