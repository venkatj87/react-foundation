import { Link } from 'react-router-dom';
import './index.css';

const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img alt="Logo" className="logo" src="./images/logo.png" />
            </div>
            <div className="nav-items-container">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li >
                        <Link to="/about" >About Us </Link>
                    </li>
                    <li>
                        <Link to="/contact" >Contact Us </Link>
                    </li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderComponent;