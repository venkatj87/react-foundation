import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';

const HeaderComponent = () => {
    const onlineStatus = useOnlineStatus()
    return (
        <div className="flex justify-between bg-orange-100 shadow-lg mb-5">
            <Link to="/" >
                <div className="logo-container">
                    <img className="w-28" alt="Logo" src="./images/logo.png" />
                </div>
            </Link>
            
            <div className="flex items-center">
                <ul className='flex p-4 m-4'>
                    <li className='px-2'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='px-2'>
                        <Link to="/about" >About Us </Link>
                    </li>
                    <li className='px-2'>
                        <Link to="/contact" >Contact Us </Link>
                    </li>
                    <li className='px-2'>Cart</li>
                    <li className='px-2'><button > {onlineStatus?<span >🟢</span>:<span>🔴</span>} </button></li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderComponent;