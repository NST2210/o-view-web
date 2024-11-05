import PrimaryLayout from '../components/layouts/primaryLayout/PrimaryLayout';
import Login from '../pages/login/Login';
import WorkList from "../pages/workList/WorkList";
import FullLayout from "../components/layouts/fullLayout/FullLayout";
import StudyList from "../pages/studyList/StudyList";
import {Navigate} from 'react-router-dom';
import Review from "../pages/review/Review";

const Router = () => [
    {
        path: '/',
        element: <Navigate to="/log-in"/>,  // Chuyển hướng từ root đến /log-in
    },
    {
        path: '/',
        element: <PrimaryLayout/>,
        children: [
            {path: 'work-list', element: <WorkList/>},
            {path: 'study-list', element: <StudyList/>},
            {path: 'review', element: <Review/>},
        ],
    },
    {
        path: '/log-in',
        element: <FullLayout/>,
        children: [
            {path: '', element: <Login/>},
        ],
    },
];
export default Router;
