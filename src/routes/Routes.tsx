import PrimaryLayout from '../components/layouts/primaryLayout/PrimaryLayout';
import Login from '../pages/login/Login';
import Dashboard from "../pages/dashboard/Dashboard";
import FullLayout from "../components/layouts/fullLayout/FullLayout";

const Router = () => [
    {
        path: '/',
        element: <PrimaryLayout/>,
        children: [
            {path: '/', element: <Dashboard/>},
            {path: '/work-list', element: <Dashboard/>},
        ],
    },
    {
        path: '/log-in',
        element: <FullLayout/>,
        children: [
            {path: '/log-in', element: <Login/>},
        ],
    },
];
export default Router;
