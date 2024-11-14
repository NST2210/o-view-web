import {useRoutes} from 'react-router-dom';
import './App.css';
import './design/sass/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './routes/Routes';
import {AppProvider} from "./components/common/AppContext";

function App() {
    const routing = useRoutes(Router());

    return (
        <AppProvider>
            {routing}
        </AppProvider>
    );
}

export default App;
