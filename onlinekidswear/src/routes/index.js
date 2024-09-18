/* eslint-disable react/jsx-no-undef */
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import LandingPage from '../pages/LandingPage';
import GirlDress from '../pages/GirlDress';
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "sign-up",
                element: <SignUp /> // Ensure the component name matches the import
            },
            {
                path: "landingpage",
                element: <LandingPage /> // Ensure the component name matches the import
            },
            {
                path: "product/dresses",
                element: <GirlDress />
            }
        
        ]
    }
]);

export default router;
