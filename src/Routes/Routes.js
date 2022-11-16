import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Appointment from "../pages/appointment/appointment/Appointment";
import Dashbord from "../pages/dashbord/dashbord/Dashbord";
import Home from "../pages/home/home/Home";
import SignUp from "../pages/home/signup/SignUp";

import Login from "../pages/login/Login";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
        <Dashbord />
      </PrivateRoutes>
    ),
  },
]);
