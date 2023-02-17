import { createBrowserRouter } from "react-router-dom";
import Appointment from "../Components/Appointment/Appointment";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Main from "../Layout/Main";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Home from "../Page/Home/Home";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
        {path:'/',element:<Home />},
        {path:'/login',element:<Login />},
        {path:'/signup', element:<Signup />},
        {path:'/appointment',element:<PrivateRoutes><Appointment /></PrivateRoutes>}
    ]},
    {path:"*",element:<ErrorPage />}

])
export default router;