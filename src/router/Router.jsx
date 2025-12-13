import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import ServiceCoveragePage from "../pages/ServiceCoverage/ServiceCoveragePage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllPackages from "../pages/AllPackages/AllPackages";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import DashboardLayout from "../layouts/DashboardLayout";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import MyBookings from "../pages/Dashboard/MyBookings/MyBookings";
import PaymentSuccess from "../pages/Dashboard/PaymentSuccess/PaymentSuccess";
import MyPaymentHistory from "../pages/Dashboard/MyPaymentHistory/MyPaymentHistory";
import ManagePackages from "../pages/Dashboard/ManageServices&Packages/ManagePackages";
import BeADecoretor from "../pages/BeADecorator/BeADecorator";
import PrivateRoute from "./PrivateRoute";
import ManageDecorators from "../pages/Dashboard/ManageDecorators/ManageDecorators";
import AssignDecorators from "../pages/Dashboard/AssignDecorators/AssignDecorators";
import ManageBookings from "../pages/Dashboard/ManageBookings/ManageBookings";
import AssignProjects from "../pages/Dashboard/AssignProjects/AssignProjects";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                path: '/',
                Component: Home,
                loader: () => fetch(`http://localhost:3000/packages?limit=${4}`)
            },
            {
                path: 'service-coverage',
                Component: ServiceCoveragePage,
                loader: () => fetch('/serviceCenters.json')
            },
            {
                path: `/package/:id`,
                Component: ServiceDetails
            },
            {
                path: "login",
                Component: Login
            },
            {
                path: "register",
                Component: Register
            },
            {
                path: "all-packages",
                Component: AllPackages
            },
            {
                path:"be-a-decorator",
                element: <PrivateRoute><BeADecoretor/></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path:'my-profile',
                Component: MyProfile
            },
            {
                path:'my-bookings',
                Component: MyBookings
            },
            {
                path:'payment-success',
                Component: PaymentSuccess
            },
            {
                path:'my-payment-history',
                Component: MyPaymentHistory
            },
            {
                path:'manage-packages',
                Component: ManagePackages
            },
            {
                path:'manage-decorators',
                Component: ManageDecorators
            },
            {
                path:'assign-decorators',
                Component: AssignDecorators
            },
            {
                path:'manage-bookings',
                Component: ManageBookings
            },
            {
                path:'assigned-projects',
                Component: AssignProjects
            }

        ]
    }
])