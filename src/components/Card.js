// import React from 'react';
import classes from '../Styles/Home.module.css';

function Card({ ImgSrc, children }) {
    return (
        <div className={classes.card}>
            <div className="icon">
                <img
                    src={ImgSrc} alt="Logo"
                />
            </div>
            <p>{children}</p>
        </div>
    )
}

export default Card;
