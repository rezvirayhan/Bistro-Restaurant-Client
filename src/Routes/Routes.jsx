import {
    createBrowserRouter
} from "react-router-dom";
import Dashbord from "../Layout/Dashbord";
import Main from "../Layout/Main";
import AddItem from "../pages/Dashbord/AddItem/AddItem";
import AllUsers from "../pages/Dashbord/AllUsers/AllUsers";
import ManageItems from "../pages/Dashbord/ManageItems/ManageItems";
import MyCart from "../pages/Dashbord/MyCart/MyCart";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import SignUp from "../pages/SignUp/SignUp";
import AdminRoutes from "./AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'order',
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }

        ]
    },
    {
        path: 'dashbord',
        element: <PrivateRoutes> <Dashbord></Dashbord></PrivateRoutes>,
        children: [
            {
                path: 'myCart',
                element: <MyCart></MyCart>
            },
            {
                path: 'allusers',
                element: <AdminRoutes>
                    <AllUsers></AllUsers>
                </AdminRoutes>
            },
            {
                path: 'addItem',
                element: <AdminRoutes>
                    <AddItem></AddItem>
                </AdminRoutes>
            },
            {
                path: 'managettems',
                element: <AdminRoutes>
                    <ManageItems></ManageItems>
                </AdminRoutes>
            }
        ]
    }
]);