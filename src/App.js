import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import UnderConstraction from './components/UnderConstraction';
// import { signUp, signIn, logOut, useAuth } from './firebase';
import { useAuth } from './firebase';
import Login from './Login';
import NotFound from "./pages/pageNotFound";
import PreLogin from './pages/PreLogin';
import Profile from './Profile';
import Signup from './Signup';
import './Styles/App.css';

function App() {
  // eslint-disable-next-line no-unused-vars
  const user = useAuth();
  return (
    <div className="App">
           <Router>
            <Routes>
            { user? (

                  <>
                    <Route path='/' element={<Profile/>} />
                    <Route path='/login' element={<Profile/>} />
                  <Route path='/signup' element={<Profile/>} />
                  <Route path='/home' element={<Profile/>} />
                  </>
                  
                  ) : (
                    <>
                      <Route path='/' element={<PreLogin/>} />                  
                      <Route path='/login' element={<Login/>} />
                      <Route path='/signup' element={<Signup/>} />
                      <Route path='/home' element={<PreLogin/>} />
                   </>
                ) }
                <Route path='/logWithGoogle' element={<UnderConstraction/>} />
                <Route path='/*' element={<NotFound/>} />

            </Routes>
        </Router>
    </div>
  );
}

export default App;
