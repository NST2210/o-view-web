import PrimaryLayout from '../components/layouts/primaryLayout/PrimaryLayout';
import Login from '../pages/login/Login';
import WorkList from "../pages/workList/WorkList";
import FullLayout from "../components/layouts/fullLayout/FullLayout";
import StudyList from "../pages/studyList/StudyList";

const Router = () => [
    {
        path: '/',
        element: <PrimaryLayout/>,
        children: [
            {path: '/', element: <WorkList/>},
            {path: '/work-list', element: <WorkList/>},
            {path: '/study-list', element: <StudyList/>},
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
