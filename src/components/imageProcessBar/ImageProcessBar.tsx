import React, { useEffect, useRef, useState } from 'react';
import circbtn01 from '../../assets/img/acquisition/circBtn_01_default.png';
import circbtn01hover from '../../assets/img/acquisition/circBtn_01_over.png';
import circbtn02 from '../../assets/img/acquisition/circBtn_02_default.png';
import circbtn02hover from '../../assets/img/acquisition/circBtn_02_over.png';
import circbtn03 from '../../assets/img/acquisition/circBtn_03_default.png';
import circbtn03hover from '../../assets/img/acquisition/circBtn_03_over.png';
import circbtn04 from '../../assets/img/acquisition/circBtn_04_default.png';
import circbtn04hover from '../../assets/img/acquisition/circBtn_04_over.png';
import circbtn05 from '../../assets/img/acquisition/circBtn_05_default.png';
import circbtn05hover from '../../assets/img/acquisition/circBtn_05_over.png';
import circbtn06 from '../../assets/img/acquisition/circBtn_06_default.png';
import circbtn06hover from '../../assets/img/acquisition/circBtn_06_over.png';
import tempXScan from '../../assets/img/temp-x-quang.jpg';
import { useOpenProcedureModal } from '../common/AppStore';
import ProcedureModal from '../modal/procedureModal/ProcedureModal';
import { Tooltip } from 'react-tooltip';
import { Button } from 'react-bootstrap';
import { ReactComponent as IconReady } from '../../assets/svg/icReady.svg';
import { ReactComponent as IcArrowDown } from '../../assets/svg/icDownArrow.svg';
import { ReactComponent as Arrow } from '../../assets/svg/arrow_accordion.svg';
import soft from '../../assets/img/acquisition/humIco_01_down.png';
import softHover from '../../assets/img/acquisition/humIco_01_over.png';
import crisp from '../../assets/img/acquisition/humIco_02_default.png';
import crispHover from '../../assets/img/acquisition/humIco_02_over.png';
import strong from '../../assets/img/acquisition/humIco_03_default.png';
import strongHover from '../../assets/img/acquisition/humIco_03_over.png';

const ImageProcessBar = ({ isReview }) => {

  const [tabSelected, setTabSelected] = useState(0);
  const [optionLst, setOptionLst] = useState([
    { id: 1, label: 'CHEST PA' }
  ]);
  const [imgSubLst, setImgSubLst] = useState(
    [{ name: 'anh1', srcImg: tempXScan }]
  );

  const [optionSelected, setOptionSelected] = useState<any>({});
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const { isOpenProcedure, openProcedure } = useOpenProcedureModal();

  const handleMouseEnter = (btnId: string) => {
    setHoveredButton(btnId);
  };
  const handleMouseLeave = () => {
    setHoveredButton(null);
  };
  const handleClick = (btnId: string) => {
    if (btnId == selectedButton) {
      setSelectedButton('');
    } else {
      setSelectedButton(btnId);
    }
  };
  const getImageSrc = (btnId: string, defaultSrc: string, hoverSrc: string, selectSrc: string) => {
    if (selectedButton === btnId) {
      return selectSrc;
    }
    if (hoveredButton === btnId) {
      return hoverSrc;
    }
    return defaultSrc;
  };

  const handleChange = (event) => {
    setOptionSelected(event.target.value);
  };

  useEffect(() => {
    setTabSelected(0);
  }, []);

  const [brightValue, setBrightValue] = useState(50);
  const [contrastValue, setContrastValue] = useState(50);
  const [sharpenValue, setSharpenValue] = useState(0);

  const handleBrightChange = (event) => {
    setBrightValue(event.target.value);
  };

  const handleContrastChange = (event) => {
    setContrastValue(event.target.value);
  };

  const handleSharpenChange = (event) => {
    setSharpenValue(event.target.value);
  };

  const getSliderBackground = (value) => {
    return `linear-gradient(to right, #0B7C83 ${value}%, #092227 ${value}%)`;
  };

  const [hovered, setHovered] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);

  const boxItems = [
    { type: 'soft', defaultImg: soft, hoverImg: softHover, label: 'soft', bgColor: '#0CA1A9' },
    { type: 'crisp', defaultImg: crisp, hoverImg: crispHover, label: 'crisp', bgColor: '#0CA1A9' },
    { type: 'strong', defaultImg: strong, hoverImg: strongHover, label: 'strong', bgColor: '#0CA1A9' }
  ];

  const isActive = (type: string) => hovered === type || focused === type;

  const [focusedIndex, setFocusedIndex] = useState(null);

  const handleImageFocus = (index) => {
    setFocusedIndex(index);
  };

  const handleClose = (index) => {
    const newImgSubLst = imgSubLst.filter((_, i) => i !== index);
    setImgSubLst(newImgSubLst);
  };

  return (
    <div className="image-process-bar">
      <div className="image-tab-container d-flex">
        <div onClick={() => {
          setTabSelected(0);
        }}
             className={`align-items-center d-flex justify-content-center text-center title-tab w-50 ${tabSelected == 0 ? 'title-tab__selected' : ''}`}>Thumbnail
        </div>
        <div onClick={() => {
          setTabSelected(1);
        }}
             className={`align-items-center d-flex justify-content-center text-center title-tab w-50 ${tabSelected == 1 ? 'title-tab__selected' : ''}`}>Image
          Processing
        </div>
      </div>
      {tabSelected == 0 && <>
        <div className="info-container">
          <div className="info-card">
            <div className="info-card__avatar"></div>
            <div className="info-card__info">
              <div className="info-card__title">ER_2024092...</div>
              <div className="info-card__id">20240924284781</div>
              <div className="info-card__date">2024-09-24</div>
            </div>
          </div>
        </div>
        <div className="content-container min-h-500px">
          {!isReview && <div className="w-100 d-flex flex-center">
            <div className="ready-btn-container text-center">
              <Button className="ready-btn d-flex flex-center gap-1">
                <IconReady className="icon-trash m-l-20" />
                <span className="m-r-20"> Ready</span>
              </Button>
            </div>
          </div>}
          <div className="d-grid p-t-10 p-b-10">
            <label className="align-items-center d-flex"><IcArrowDown
              className="m-r-10" />{`Image Num: ${imgSubLst?.length || 0}`}</label>
            <div className="select-custom w-100">
              <select value={optionSelected} onChange={handleChange}>
                {optionLst?.map((option, index) => (
                  <option key={index} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
              <Arrow className="arrow-icon" />
            </div>
          </div>
          <div className="w-100 d-grid grid-col-2 p-t-10 img-sub-lst">
            {imgSubLst?.map((image, index) => (
              <div key={index} className="image-container">
                <img
                  className={`w-100px h-100px ${focusedIndex === index ? 'focused' : ''}`}
                  src={image?.srcImg}
                  onFocus={() => handleImageFocus(index)}
                  tabIndex={0}
                  alt={`Image ${index + 1}`}
                />
                {focusedIndex === index && <button className="close-ic-btn" onClick={() => handleClose(index)} aria-label="Close image">X</button>}
              </div>
            ))}
          </div>
        </div>
      </>}
      {tabSelected == 1 && <>
        <div className="content-container min-h-610px">
          {!isReview && <div className="w-100 d-flex flex-center">
            <div className="ready-btn-container text-center">
              <Button className="ready-btn d-flex flex-center gap-1">
                <IconReady className="icon-trash m-l-20" />
                <span className="m-r-20"> Ready</span>
              </Button>
            </div>
          </div>}
          <div className="d-grid p-t-10 p-b-10">
            <label className="align-items-center d-flex"><IcArrowDown
              className="m-r-10" />Image Processing</label>
            <div className="select-custom w-100">
              <select value={optionSelected} onChange={handleChange}>
                {optionLst?.map((option, index) => (
                  <option key={index} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
              <Arrow className="arrow-icon" />
            </div>
          </div>
          <div className="d-flex w-100 gap-2 box-container">
            {boxItems.map(({ type, defaultImg, hoverImg, label, bgColor }) => (
              <div
                key={type}
                className="d-flex flex-column"
                onMouseEnter={() => setHovered(type)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setFocused(type)}
                onBlur={() => setFocused(null)}
                tabIndex={0}
              >
                <Button className="box-img">
                  <img src={isActive(type) ? hoverImg : defaultImg} width={50} height={50} />
                </Button>
                <Button className="box-text" style={{ backgroundColor: isActive(type) ? bgColor : 'transparent' }}>
                  {label}
                </Button>
              </div>
            ))}
          </div>
          <div className="w-100 m-t-20">
            <label className="align-items-center d-flex"><IcArrowDown
              className="m-r-10" />Market</label>
            <div className="l-r-container">
              <div className="l-btn-container text-center">
                <Button className="l-btn d-flex flex-center gap-1">
                  <span className="d-flex justify-content-center align-items-center">L</span>
                </Button>
              </div>
              <div className="r-btn-container text-center">
                <Button className="r-btn d-flex flex-center gap-1">
                  <span className="d-flex justify-content-center align-items-center">R</span>
                </Button>
              </div>
            </div>
            <div className="slider-container">
              <div className="slider">
                <label htmlFor="bright">Bright</label>
                <input type="range" id="bright" name="bright" min="0" max="100" value={brightValue}
                       onChange={handleBrightChange} style={{ background: getSliderBackground(brightValue) }} />
              </div>
              <div className="slider">
                <label htmlFor="contrast">Contrast</label>
                <input type="range" id="contrast" name="contrast" min="0" max="100" value={contrastValue}
                       onChange={handleContrastChange} style={{ background: getSliderBackground(contrastValue) }} />
              </div>
              <div className="slider">
                <label htmlFor="sharpen">Sharpen</label>
                <input type="range" id="sharpen" name="sharpen" min="0" max="100" value={sharpenValue}
                       onChange={handleSharpenChange} style={{ background: getSliderBackground(sharpenValue) }} />
              </div>
            </div>
            <div className="w-100 d-flex flex-center m-t-10">
              <div className="analyze-btn-container text-center">
                <Button className="analyze-btn d-flex flex-center gap-1">
                  <span className="m-r-20">AI ANALYZE</span>
                </Button>
              </div>
            </div>
            <div className="four-container">
              <div className="four-btn-container text-center">
                <Button className="four-btn d-flex flex-center gap-1">
                  <span className="four-text">RESET</span>
                </Button>
              </div>
              <div className="four-btn-container text-center">
                <Button className="four-btn d-flex flex-center gap-1">
                  <span className="four-text">PROCESSING</span>
                </Button>
              </div>
            </div>
            <div className="four-container">
              <div className="four-btn-container text-center">
                <Button className="four-btn d-flex flex-center gap-1">
                  <span className="four-text">SAVE PAR</span>
                </Button>
              </div>
              <div className="four-btn-container text-center">
                <Button className="four-btn d-flex flex-center gap-1">
                  <span className="four-text">INIT PAR</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>}
      <div className="content-container border-top-none">
        <div className=" d-grid grid-col-3 h-80 w-100 m-b-30">
          <img
            id="btnCrop"
            className="quick-btn"
            src={getImageSrc('btnCrop', circbtn01, circbtn01hover, circbtn01hover)}
            onMouseEnter={() => handleMouseEnter('btnCrop')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('btnCrop')}
            data-tooltip-id="tooltip-img"
            data-tooltip-content="Crop"
            width={60} height={60}
          />

          <img
            id="btnAddBodypart"
            className="quick-btn"
            src={getImageSrc('btnAddBodypart', circbtn02, circbtn02hover, circbtn02hover)}
            onMouseEnter={() => handleMouseEnter('btnAddBodypart')}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              openProcedure();
            }}
            data-tooltip-id="tooltip-img"
            data-tooltip-content="Add body part"
            width={60} height={60}
          />

          <img
            id="btnSuspend"
            className="quick-btn"
            src={getImageSrc('btnSuspend', circbtn03, circbtn03hover, circbtn03hover)}
            onMouseEnter={() => handleMouseEnter('btnSuspend')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('btnSuspend')}
            data-tooltip-id="tooltip-img"
            data-tooltip-content="Suspend"
            width={60} height={60}
          />

          <img
            id="btnRetake"
            className="quick-btn"
            src={getImageSrc('btnRetake', circbtn04, circbtn04hover, circbtn04hover)}
            onMouseEnter={() => handleMouseEnter('btnRetake')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('btnRetake')}
            data-tooltip-id="tooltip-img"
            data-tooltip-content="Retake"
            width={60} height={60}
          />

          <img
            id="btnReject"
            className="quick-btn"
            src={getImageSrc('btnReject', circbtn05, circbtn05hover, circbtn05hover)}
            onMouseEnter={() => handleMouseEnter('btnReject')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('btnReject')}
            data-tooltip-id="tooltip-img"
            data-tooltip-content="Reject"
            width={60} height={60}
          />

          <img
            id="btnAccept"
            className="quick-btn"
            src={getImageSrc('btnAccept', circbtn06, circbtn06hover, circbtn06hover)}
            onMouseEnter={() => handleMouseEnter('btnAccept')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('btnAccept')}
            data-tooltip-id="tooltip-img"
            data-tooltip-content="Accept"
            width={60} height={60}
          />
        </div>
      </div>
      <Tooltip id="tooltip-img" className="img-tooltip" place={'bottom'} />
      {isOpenProcedure && <ProcedureModal />}
    </div>
  );
};

export default ImageProcessBar;
