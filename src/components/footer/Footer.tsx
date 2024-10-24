import { ReactComponent as LogoCRMC } from '~/assets/svg/logo_crmc.svg';
import { ReactComponent as Twitter } from '~/assets/svg/logo_twitter.svg';
import { ReactComponent as Telegram } from '~/assets/svg/logo_tele.svg';
import { ReactComponent as Medium } from '~/assets/svg/logo_medium.svg';
const Footer = () => {
  return (
    <div className="footer-crmc d-grid justify-items-center">
      <LogoCRMC className="mb-2" />
      <div className="description-footer">
        <div>Trade, swap, collect & earn with a wide spread of crypto.</div>
        <div>Support NFTs from all current chains</div>
      </div>
      <div className="d-flex gap-12px">
        <div className="logo_socical">
          <Twitter className="" width={20} height={17} />
        </div>
        <div className="logo_socical">
          <Medium width={28} height={16} />
        </div>
        <div className="logo_socical">
          <Telegram width={24} height={21} />
        </div>
      </div>
      <div className="copyright">Copyright © 2024 cRMC. All rights reserved.</div>
    </div>
  );
};
export default Footer;
