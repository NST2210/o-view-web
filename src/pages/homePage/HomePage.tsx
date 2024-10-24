import { Link } from 'react-router-dom';
import banner from '../../assets/svg/ImageHeadAll.svg';
const HomePage = () => {
  return (
    <div className="fs-64 fw-7 p-8">
      <div className="d-flex overflow-hidden flex-column items-center self-stretch px-12 pt-8 pb-12 w-100 min-h-1136px">
        <div className="mt-28 text-6xl font-bold text-center text-black capitalize leading-[77px] max-md:mt-10 max-md:max-w-100 max-md:text-4xl max-md:leading-[53px]">
          <span className="">The All-in-one</span>
          <br />
          <span className="text-yellow">NFT Marketplace</span>
        </div>
        <div className="fs-18 fw-5 left-38 position-absolute text-center top-58 w-25 z-1">
          Trade, swap, collect & earn with a wide spread of crypto. Support NFTs from all current chains
        </div>
        <div className="position-relative mt-7 mb-52 w-100 max-w-[1652px] max-md:mb-10 max-md:max-w-100">
          <img loading="lazy" srcSet={banner} className="grow max-w-100 w-100" />
        </div>
      </div>
      Homepage
      <div className="pt-5">
        <Link to={'/profile'}> Go to my profile</Link>
      </div>
    </div>
  );
};
export default HomePage;
