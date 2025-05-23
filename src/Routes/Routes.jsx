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
import TipsDetails from "../Pages/TipsDetails";
import UpdateTips from "../Pages/UpdateTips";
import Loading from "../Components/Loading";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <Error />,
        children: [
            {
                index: true,
                loader: () => fetch("https://garden-hub-server-zeta.vercel.app/gardeners"),
                Component: Home,
                hydrateFallbackElement: <Loading />
            },
            {
                path: "gardeners",
                loader: () => fetch("https://garden-hub-server-zeta.vercel.app/gardenersAll"),
                Component: ExploreGardeners,
                hydrateFallbackElement: <Loading />
            },
            {
                path: "browseTips",
                loader: () => fetch("https://garden-hub-server-zeta.vercel.app/browseTips"),
                Component: BrowseTips,
                hydrateFallbackElement: <Loading />
            },
            {
                path: "tipsDetails/:id",
                loader: ({ params }) =>
                    fetch(`https://garden-hub-server-zeta.vercel.app/tipsDetails/${params.id}`),
                element: <PrivateProvider><TipsDetails /></PrivateProvider>,
                hydrateFallbackElement: <Loading />
            },
            {
                path: "shareTips",
                element: <PrivateProvider><ShareTips /></PrivateProvider>
            },
            {
                path: 'myTips',
                element: <PrivateProvider><MyTips /></PrivateProvider>,
                hydrateFallbackElement: <Loading />
            },

            {
                path: "updateTips/:id",
                loader: ({ params }) =>
                    fetch(`https://garden-hub-server-zeta.vercel.app/updateTips/${params.id}`),
                element: <PrivateProvider><UpdateTips /></PrivateProvider>,
                hydrateFallbackElement: <Loading />

            }

        ]
    },
    {
        path: "",
        Component: AuthLayout,
        errorElement: <Error />,
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
