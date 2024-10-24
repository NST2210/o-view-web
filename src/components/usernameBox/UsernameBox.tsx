import { Link, useNavigate } from 'react-router-dom';
import Twitter from '~/assets/svg/logo_twitter.svg';
import Telegram from '~/assets/svg/logo_tele.svg';
import Medium from '~/assets/svg/logo_medium.svg';
import close_icon from '~/assets/svg/close_icon.svg';
import { ReactComponent as Profile } from '~/assets/svg/profile.svg';
import { ReactComponent as MyItem } from '~/assets/svg/myitem.svg';
import { ReactComponent as History } from '~/assets/svg/history.svg';
import useScreenSize from '../common/useScreenSize';

const UsernameBox = () => {
  const navigate = useNavigate();
  const screenSize = useScreenSize();
  return (
    <div className={`user-dropdown-box ${screenSize > 541 ? 'box-shadow-box' : ''}`} style={{}}>
      <div className="close-sidebar">
        <div className="icon-close" onClick={() => {}}>
          {<img src={close_icon} alt="Close Icon" />}
        </div>
      </div>
      <div className="wrapper-dropdown">
        <Link to={'/profile'} className="wallet-button" onClick={() => {}}>
          {/* <img src={my_profile} alt="My Profile" /> */}
          <Profile />
          Profile
        </Link>
        <Link to={'/my-items'} className="wallet-button" onClick={() => {}}>
          {/* <img src={my_collectibles} alt="My Collectibles" /> */}
          <MyItem />
          My Items
        </Link>
        <Link to={'/history'} className="wallet-button" onClick={() => {}}>
          <History />
          History
        </Link>

        <div className="wrapper-fanpages">
          <a href="//twitter.com/Talken_" target={'_blank'} rel="noreferrer" className="custom-icon">
            <img src={Twitter} alt="" />
          </a>
          <a href={'//discord.gg/S33c5DA9cW'} target={'_blank'} rel="noreferrer" className="custom-icon">
            <img src={Medium} alt="" />
          </a>
          <a href={'//www.instagram.com/talken_nft'} target={'_blank'} rel="noreferrer" className="custom-icon">
            <img src={Telegram} alt="" />
          </a>
        </div>
      </div>
      <div
        className={`logout-btn`}
        onClick={() => {
          navigate('/');
        }}
      >
        Log Out
      </div>
    </div>
  );
};

export default UsernameBox;
