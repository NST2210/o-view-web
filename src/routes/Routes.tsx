import PrimaryLayout from '../components/layouts/primaryLayout/PrimaryLayout';
import { Dashboard } from '../pages/dashboard/Dashboard';
import Login from '../pages/login/Login';

const Router = () => [
  {
    path: '/',
    element: <PrimaryLayout />,
    children: [
      { path: '/', element: <Login /> },
      { path: '/work-list', element: <Dashboard /> },
      { path: '/log-in', element: <Login />},
    ],
  },
];
export default Router;
