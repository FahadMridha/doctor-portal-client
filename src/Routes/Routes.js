import { createBrowserRouter } from "react-router-dom";
import DashbordLayout from "../layout/DashboardLayout/DashboardLayout";
import Main from "../layout/main/Main";
import Appointment from "../pages/appointment/appointment/Appointment";
import AddDoctor from "../pages/dashbord/addDoctor/AddDoctor";
import AllUsers from "../pages/dashbord/dashbord/allUsers/AllUsers";
import Dashbord from "../pages/dashbord/dashbord/Dashbord";
import ManageDoctors from "../pages/dashbord/manageDoctors/ManageDoctors";
import MyAppiontments from "../pages/dashbord/myAppiontments/MyAppiontments";
import Payment from "../pages/dashbord/payment/Payment";
import ErrrorPage from "../pages/error/ErrrorPage";
import Home from "../pages/home/home/Home";
import SignUp from "../pages/home/signup/SignUp";

import Login from "../pages/login/Login";
import AdminRoutes from "./AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/appiontment",
        element: <Appointment />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashbordLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppiontments />,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoutes>
            <AllUsers />
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/adddoctor",
        element: (
          <AdminRoutes>
            <AddDoctor />
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/managedoctors",
        element: (
          <AdminRoutes>
            <ManageDoctors />
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          <AdminRoutes>
            <Payment />
          </AdminRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookings/${params.id}`),
      },
    ],
  },
]);
