import { Outlet } from 'react-router-dom';
import Footer from '../../footer/Footer';
import Header from "../../header/Header";

const PrimaryLayout = () => (
  <>
    <Header />
    <Outlet />
    {/* <Footer /> */}
  </>
);

export default PrimaryLayout;
