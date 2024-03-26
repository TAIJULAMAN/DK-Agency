import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Portfolio from "../Pages/Portfolio/Portfolio";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AppDev from "../Pages/AppDev/AppDev";
import WebDev from "../Pages/WebDev/WebDev";
import SignUp from "../Components/SignUp/SignUp";
import LogIn from "../Components/LogIn/LogIn";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/web-development',
                element: <WebDev/>
            },
            {
                path: '/app-development',
                element: <AppDev/>
            },
            {
                path: '/portfolio',
                element: <Portfolio/>
            },
            {
                path: '/about-us',
                element: <AboutUs/>
            },
            {
                path: '/contact-us',
                element: <ContactUs/>
            },
            {
                path: '/sign-up',
                element: <SignUp/>
            },
            {
                path: '/log-in',
                element: <LogIn/>
            },
        ],
    },

])
export default router;
