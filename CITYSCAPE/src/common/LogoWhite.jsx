import React from 'react';
import { Link } from 'react-router-dom';

import LogoWhiteImage from '/assets/images/logo/logoo.png?url';

const LogoWhite = () => {
    return (
        <>
            <Link to="/" className="mobile-menu__logo">
                <img src={LogoWhiteImage} alt="Logo" style={{ maxWidth: '150px' }}/>
            </Link>   
        </>
    );
};

export default LogoWhite;