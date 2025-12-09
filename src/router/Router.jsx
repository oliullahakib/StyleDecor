import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import ServiceCoveragePage from "../pages/ServiceCoverage/ServiceCoveragePage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


export const router = createBrowserRouter([
    {
        path:"/",
        Component:RootLayout,
        children:[
            {
                path:'/',
                Component:Home,
            },
            {
                path:'service-coverage',
                Component:ServiceCoveragePage,
                loader:()=>fetch('/serviceCenters.json')
            },
            {
                path:"login",
                Component:Login
            },
            {
                path:"register",
                Component:Register
            }
        ]
    }
])