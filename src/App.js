import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/header/HeaderComponent';
import BodyComponent from './components/body/BodyComponent';
import FooterComponent from './components/footer/FooterComponet';
import './app.css';
import restoData from './utils/mockData';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import AboutUsComponenet from './components/aboutus/AboutUsComponene';
import Contact from './components/contact/Contact';
import ErrorComponent from './components/ErrorComponent';
import RestaurentMenuPage from './components/RestaurentMenu/RestaurentMenuPage';

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
            <Outlet />
            <FooterComponent />
        </div>
    )
}

const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppComponent />,
            errorElement: <ErrorComponent />,
            children: [
                {
                    path: "/",
                    element: <BodyComponent data={restoData}/>
                },
                {
                    path: "/about",
                    element: <AboutUsComponenet />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/restaurent/:resId",
                    element: <RestaurentMenuPage />
                }
            ]

        },
        
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);