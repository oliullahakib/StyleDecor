import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import ServiceCoveragePage from "../pages/ServiceCoverage/ServiceCoveragePage";


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
        ]
    }
])