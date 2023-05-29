import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../layouts/Layout.jsx";

const Home = lazy(() => import("../views/Home.jsx"));

const Router = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Navigate to="/home" /> },
            {path: '/home', element: <Home />},
        ]
      },
]

export default Router;