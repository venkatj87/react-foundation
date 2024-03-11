import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './Components/Header/HeaderComponent.jsx';
import BodyComponent from './Components/Body/BodyComponent.jsx';
import './index.css';
import restoData from './utils/mockData';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import ContactPage from './Components/contact/ContactPage.jsx';
import ErrorComponent from './Components/ErrorComponent.jsx';
import RestaurantMenuPage from './Components/RestaurentMenu/RestaurantMenuPage.jsx';

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search item
 * - Food Item card component
 * - Footer
 * - Copyrights
 * - Desclimer
 *
 */

const AboutUsComponent = lazy(() => import("./Components/aboutus/AboutUsComponent.jsx"));

const AppComponent = () => {
    return (
        <div className='root-container'>
            <HeaderComponent />
            <Outlet />
            {/* <FooterComponent /> */}
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
                    element: <Suspense fallback={<h4>Loading....</h4>}><AboutUsComponent /></Suspense>
                },
                {
                    path: "/contact",
                    element: <ContactPage />
                },
                {
                    path: "/restaurents/:resId",
                    element: <RestaurantMenuPage />
                }
            ]

        },
        
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);