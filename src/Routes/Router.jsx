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
// import AdminRoute from "./AdminRoute/AdminRoute";
import DashBoard from "../Components/DashBoard/DashBoard/DashBoard";
import AppPage from "../Components/DashBoard/AppPage/AppPage";
import ReviewPage from "../Components/DashBoard/ReviewPage/ReviewPage";
import UserPage from "../Components/DashBoard/UserPage/UserPage";
import WebPage from "../Components/DashBoard/WebPage/WebPage";
import AddReview from "../Components/DashBoard/ReviewPage/AddReview";
import AddWeb from "../Components/DashBoard/WebPage/AddWeb";
import AddApp from "../Components/DashBoard/AppPage/AddApp";
// import PrivateRoute from "./PrivateRoute/PrivateRoute";
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
    {
        path: "/dashboard",
        element:<DashBoard/>,
        children: [
          {
            path: "app",
            element:<AppPage/>
          },
          {
            path: "app/addapp",
            element:<AddApp/>
          },
          {
            path: "review",
            element:<ReviewPage/>,
          },
          {
            path: "review/addreview",
            element:<AddReview/>
          },
          {
            path: "allusers",
            element:<UserPage/>
          },
          {
            path: "web",
            element:<WebPage/>
          },
          {
            path: "web/addweb",
            element:<AddWeb/>
          }
        ]
      }

])
export default router;
