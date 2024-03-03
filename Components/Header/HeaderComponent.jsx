import './index.css';

// const logo = new URL('logo.png', './images/logo.png');
// console.log(logo);
const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img alt="Logo" className="logo" src="images/logo.png" />
            </div>
            <div className="nav-items-container">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderComponent;