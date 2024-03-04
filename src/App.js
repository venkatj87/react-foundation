import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './Components/Header/HeaderComponent';
import BodyComponent from './Components/Body/BodyComponent';
import FooterComponent from './Components/Footer/FooterComponet';
import './app.css';
import restoData from './utils/mockData';
/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search item
 * - Food Item card component
 * Footer
 * - Copyrights
 * - Desclimer
 *
 */
const AppComponent = () => {
    
    return (
        <div className='root-container'>
            <HeaderComponent />
            <BodyComponent data={restoData}/>
            <FooterComponent />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent/>);