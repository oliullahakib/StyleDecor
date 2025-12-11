import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import ServiceCoveragePage from "../pages/ServiceCoverage/ServiceCoveragePage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllPackages from "../pages/AllPackages/AllPackages";


export const router = createBrowserRouter([
    {
        path:"/",
        Component:RootLayout,
        children:[
            {
                path:'/',
                Component:Home,
                loader:()=>fetch(`http://localhost:3000/packages?limit=${4}`)
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
            },
            {
                path:"all-packages",
                Component:AllPackages
            }
        ]
    }
])