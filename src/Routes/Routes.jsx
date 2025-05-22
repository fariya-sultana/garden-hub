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
import Loading from "../Components/Loading";


const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                loader: ()=> fetch("http://localhost:3000/gardeners"),
                Component: Home,
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: 'gardeners',
                loader: ()=> fetch("http://localhost:3000/gardenersAll"),
                Component: ExploreGardeners,
                hydrateFallbackElement: <Loading></Loading>
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