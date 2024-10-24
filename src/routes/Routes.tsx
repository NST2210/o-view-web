import PrimaryLayout from '../components/layouts/primaryLayout/PrimaryLayout';
import { Dashboard } from '../pages/dashboard/Dashboard';
import HomePage from '../pages/homePage/HomePage';
import MyProfile from '../pages/myProfile/MyProfile';
import Login from '../pages/login/Login';

const Router = () => [
  {
    path: '/',
    element: <PrimaryLayout />,
    children: [
      { path: '/', element: <Login /> },
      { path: '/work-list', element: <Dashboard /> },
      { path: '/profile', element: <MyProfile /> },
      { path: '/log-in', element: <Login />},
    ],
  },
];
export default Router;
