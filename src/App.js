import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/header/HeaderComponent';
import BodyComponent from './Components/Body/BodyComponent.jsx';
import FooterComponent from './components/footer/FooterComponet';
import './index.css';
import restoData from './utils/mockData';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Contact from './components/contact/Contact';
import ErrorComponent from './components/ErrorComponent';
import RestaurantMenuPage from './components/RestaurentMenu/RestaurantMenuPage.jsx';

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

const AboutUsComponent = lazy(() => import("./components/aboutus/AboutUsComponent.jsx"));

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
                    element: <Contact />
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