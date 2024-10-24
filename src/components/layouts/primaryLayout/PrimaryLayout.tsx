import { Outlet } from 'react-router-dom';
import { Header } from '../../header/Header';
import Footer from '../../footer/Footer';

const PrimaryLayout = () => (
  <>
    <Header />
    <Outlet />
    {/* <Footer /> */}
  </>
);

export default PrimaryLayout;
