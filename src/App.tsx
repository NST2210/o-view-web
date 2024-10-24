import { useRoutes } from 'react-router-dom';
import './App.css';
import './design/sass/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './routes/Routes';

function App() {
  const routing = useRoutes(Router());

  return <>{routing}</>;
}

export default App;
