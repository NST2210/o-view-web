import { MutableRefObject, useRef, useState } from 'react';
import { ReactComponent as LogoCRMC } from '~/assets/svg/logo_crmc.svg';
import { ReactComponent as ChevronDown } from '~/assets/svg/bx_chevron-down.svg';
import AvatarTemp from '~/assets/svg/avt_temp.svg';
import UsernameBox from '../usernameBox/UsernameBox';
const Navbar = () => {
  const ref = useRef() as MutableRefObject<HTMLButtonElement>;
  const [isLogin, setIsLogin] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="navbar d-flex h-100px">
      <div className="nav-left d-flex gap-5 h-100">
        <LogoCRMC className="h-100" />
        <div className="h-100 d-flex align-items-center">
          <div className="nav-item">Market</div>
        </div>
      </div>
      <div className="nav-right hover-cusor-pointer">
        {!isLogin ? (
          <div className="connect-wallet button" onClick={() => setIsLogin(true)}>
            Connect Wallet
          </div>
        ) : (
          <div className="user-info d-flex gap-8px h-26px align-items-center" onMouseEnter={() => setModalOpen(true)}>
            <div className="avatar h-26px w-26px">
              <img src={AvatarTemp} width={26} height={26} />
            </div>
            <div className="username fs-14 fw-7">McLaren Racing</div>
            <ChevronDown width={24} height={24} onClick={() => setModalOpen(!isModalOpen)} />
            {/* user dropdown box */}
            <div onMouseLeave={() => setModalOpen(false)}>{isModalOpen && <UsernameBox />}</div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
