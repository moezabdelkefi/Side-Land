import LogoImg from '/assets/images/logo/logo.png?url';
import { Link } from 'react-router-dom';

const Logo = () => {
    return   (
        <>
            <Link to="/" className="link">
                <img src={LogoImg} alt="Logo" className="img-fluid" style={{ maxWidth: '100px' }}/>
            </Link>
        </>
    );
};

export default Logo;