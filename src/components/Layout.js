import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";
// import { signUp, signIn, logOut, useAuth } from './firebase';

import UnderConstraction from '../components/UnderConstraction';
import Login from '../pages/Login';
import NotFound from "../pages/pageNotFound";
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
                <Route path='/logWithGoogle' element={<UnderConstraction/>} />
                <Route path='/*' element={<NotFound/>} />

            </Routes>
        </Router>
    )
}

export default Layout
