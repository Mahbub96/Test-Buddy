import React from 'react';
import Card from '../components/Card';
import Details from '../components/Details';
import Navbar from '../components/Navbar';
import '../Styles/Profile.css';


function Profile() {
    return (
        <>
            <section className="top">

                <Navbar />
            </section>
         <section className="bottom">

            <Details />
            <Card/>
         </section>

          
        </>
    )
}

export default Profile
