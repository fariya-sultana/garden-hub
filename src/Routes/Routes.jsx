import {
    createBrowserRouter,
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import Error from "../Pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                Component: Home
            },

        ]
    },
    {
        path: "",
        Component: AuthLayout,
        errorElement: <Error></Error>,
        children: [
            {
                path: "login",
                Component: LogIn
            },
            {
                path: "register",
                Component: Register
            }
        ]
    }
]);

export default router;