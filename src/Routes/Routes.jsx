import { createBrowserRouter } from "react-router-dom";
import Appointment from "../Components/Appointment/Appointment";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";

const router = createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
        {path:'/',element:<Home />},
        {path:'/login',element:<Login />},
        {path:'/signup', element:<Signup />},
        {path:'/appointment',element:<Appointment />}
    ]}

])
export default router;