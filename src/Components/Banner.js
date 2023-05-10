import React from 'react';
import FreshLitLogo from '../Assets/Images/FreshLitLogo.png';
import '../Styles/Banner.css';
import '../Styles/Main.css';

export const Banner = () => {
    return (
        <div className='banner-container all-columns col-14'>
            <div className='logo-container col-6'>
                <img
                    src={FreshLitLogo}
                    alt='Fresh Lit Logo'
                    className='fresh-lit-logo'
                />
            </div>
        </div>
    );
};

export default Banner;
