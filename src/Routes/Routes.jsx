import {
    createBrowserRouter,
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import Error from "../Pages/Error";
import PrivateProvider from "../Contexts/PrivateProvider";
import ShareTips from "../Pages/ShareTips";
import ExploreGardeners from "../Pages/ExploreGardeners";
import MyTips from "../Pages/MyTips";
import BrowseTips from "../Pages/BrowseTips";


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
            {
                path: 'gardeners',
                Component: ExploreGardeners
            },
            {
                path: 'browseTips',
                Component: BrowseTips
            },
            {
                path: 'shareTips',
                element: <PrivateProvider><ShareTips></ShareTips></PrivateProvider>
            },
            {
                path: 'myTips',
                element: <PrivateProvider><MyTips></MyTips></PrivateProvider>
            }

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