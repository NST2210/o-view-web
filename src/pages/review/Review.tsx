import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ImageProcessBar from '../../components/imageProcessBar/ImageProcessBar';
import {
  useOpenFileExport,
  useOpenProcessModal,
  useOpenSendToPacs,
  useOpenUseBackup
} from '../../components/common/AppStore';
import ProcessModal from '../../components/modal/processModal/ProcessModal';
import toolico01 from '../../assets/img/tools/toolico_01_default.png';
import toolico01hover from '../../assets/img/tools/toolico_01_over.png';
import toolico02 from '../../assets/img/tools/toolico_02_default.png';
import toolico02hover from '../../assets/img/tools/toolico_02_over.png';
import toolico03 from '../../assets/img/tools/toolico_03_default.png';
import toolico03hover from '../../assets/img/tools/toolico_03_over.png';
import toolico04 from '../../assets/img/tools/toolico_04_default.png';
import toolico04hover from '../../assets/img/tools/toolico_04_over.png';
import toolico05 from '../../assets/img/tools/toolico_05_default.png';
import toolico05hover from '../../assets/img/tools/toolico_05_over.png';
import toolico06 from '../../assets/img/tools/toolico_06_default.png';
import toolico06hover from '../../assets/img/tools/toolico_06_over.png';
import toolico07 from '../../assets/img/tools/toolico_07_default.png';
import toolico07hover from '../../assets/img/tools/toolico_07_over.png';
import toolico08 from '../../assets/img/tools/toolico_08_default.png';
import toolico08hover from '../../assets/img/tools/toolico_08_over.png';
import toolico09 from '../../assets/img/tools/toolico_09_default.png';
import toolico09hover from '../../assets/img/tools/toolico_09_over.png';
import toolico10 from '../../assets/img/tools/toolico_10_default.png';
import toolico10hover from '../../assets/img/tools/toolico_10_over.png';
import toolico11 from '../../assets/img/tools/toolico_11_default.png';
import toolico11hover from '../../assets/img/tools/toolico_11_over.png';
import toolico12 from '../../assets/img/tools/toolico_12_default.png';
import toolico12hover from '../../assets/img/tools/toolico_12_over.png';
import toolico13 from '../../assets/img/tools/toolico_13_default.png';
import toolico13hover from '../../assets/img/tools/toolico_13_over.png';
import toolico14 from '../../assets/img/tools/toolico_14_default.png';
import toolico14hover from '../../assets/img/tools/toolico_14_over.png';
import toolico15 from '../../assets/img/tools/toolico_15_default.png';
import toolico15hover from '../../assets/img/tools/toolico_15_over.png';
import toolico16 from '../../assets/img/tools/toolico_16_default.png';
import toolico16hover from '../../assets/img/tools/toolico_16_over.png';
import toolico17 from '../../assets/img/tools/toolico_17_default.png';
import toolico17hover from '../../assets/img/tools/toolico_17_over.png';
import toolico18 from '../../assets/img/tools/toolico_18_default.png';
import toolico18hover from '../../assets/img/tools/toolico_18_over.png';
import toolico19 from '../../assets/img/tools/toolico_19_default.png';
import toolico19hover from '../../assets/img/tools/toolico_19_over.png';
import toolico20 from '../../assets/img/tools/toolico_20_default.png';
import toolico20hover from '../../assets/img/tools/toolico_20_over.png';
import toolico21 from '../../assets/img/tools/toolico_21_default.png';
import toolico21hover from '../../assets/img/tools/toolico_21_over.png';
import { Tooltip } from 'react-tooltip';
import { ReactComponent as IcArrowDown } from '../../assets/svg/icDownArrow.svg';
import tempXScan from '../../assets/img/temp-x-quang.jpg';
import FileExportModal from "../../components/modal/fileExportModal/FileExportModal";
import UseBackupModal from "../../components/modal/useBackupModal/UseBackupModal";
import SendToPacsModal from "../../components/modal/sendToPacsModal/SendToPacsModal";


const Review = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isReview = currentPath == '/review';
  const { isOpenProcess, openProcess, closeProcess } = useOpenProcessModal();
  const {openFileExport, isOpenFileExport} = useOpenFileExport();
  const {openSendToPacs, isOpenSendToPacs} = useOpenSendToPacs();
  const {openUseBackup, isOpenUseBackup} = useOpenUseBackup();

  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

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

  useEffect(() => {
    openProcess();
    const interval = setInterval(() => {
      closeProcess();
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="review">
      <div className="review-content">
        <ImageProcessBar isReview={isReview} />
        <div className="image-content-container">
          <div className="w-20 left-image">
            <div className="top-info">
              <div>20241095798</div>
              <div>1</div>
              <div>hjhj</div>
              <div>DOB 10/09/2024</div>
              <div>SEX M</div>
            </div>
            <div className="center-info">
              <div className="text-01">AL RESULT</div>
              <div>Normal</div>
            </div>
            <div className="bottom-info">
              <div className="m-b-10">CHEST PA</div>
              <div>10/09/2024</div>
              <div>OTOM</div>
            </div>
          </div>
          <div className="w-60">
            <img src={tempXScan} className="img-center" />
          </div>
          <div className="w-20 right-image">
            <div className="right-top">
              <div className="m-b-20 d-flex justify-content-end">OTOM HOSPITAL</div>
              <div className="d-flex justify-content-end">DX</div>
            </div>
            <div className="right-center"></div>
            <div className="right-bottom">
              <div className="d-flex justify-content-end">Fit, Mag: 100%</div>
              <div className="d-flex justify-content-end">W:65534 L:32763</div>
            </div>
          </div>
        </div>
        <div className="image-function d-flex flex-center h-872px">
          <div className="image-function-container d-flex flex-column max-h-870px">
            <label className="align-items-center d-flex m-t-20 m-b-20 p-l-10 p-r-10"><IcArrowDown
              className="m-r-10" />Tool Select</label>
            <div className="d-grid grid-col-2 gap-1 p-10">
              <img
                id="btnToolPan"
                className="hover-cusor-pointer"
                src={getImageSrc('btnToolPan', toolico01, toolico01hover, toolico01hover)}
                onMouseEnter={() => handleMouseEnter('btnToolPan')}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('btnToolPan')}
                data-tooltip-id="tooltip-img"
                data-tooltip-content="PAN" />

              <img
                id="btnToolZoom"
                className="hover-cusor-pointer"
                src={getImageSrc('btnToolZoom', toolico02, toolico02hover, toolico02hover)}
                onMouseEnter={() => handleMouseEnter('btnToolZoom')}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('btnToolZoom')}
                data-tooltip-id="tooltip-img"
                data-tooltip-content="ZOOM" />

              <img
                id="btnToolEdit"
                className="hover-cusor-pointer"
                src={getImageSrc('btnToolEdit', toolico03, toolico03hover, toolico03hover)}
                onMouseEnter={() => handleMouseEnter('btnToolEdit')}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('btnToolEdit')}
                data-tooltip-id="tooltip-img"
                data-tooltip-content="EDIT" />

              <img
                id="btnToolEraser"
                className="hover-cusor-pointer"
                src={getImageSrc('btnToolEraser', toolico04, toolico04hover, toolico04hover)}
                onMouseEnter={() => handleMouseEnter('btnToolEraser')}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('btnToolEraser')}
                data-tooltip-id="tooltip-img"
                data-tooltip-content="ERASER" />

              <img
                id="btnToolRotateCW"
                className="hover-cusor-pointer"
                src={getImageSrc('btnToolRotateCW', toolico05, toolico05hover, toolico05hover)}
                onMouseEnter={() => handleMouseEnter('btnToolRotateCW')}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('btnToolRotateCW')}
                data-tooltip-id="tooltip-img"
                data-tooltip-content="ROTATE CW" />

              <img
                id="btnToolRotateCCW"
                className="hover-cusor-pointer"
                src={getImageSrc('btnToolRotateCCW', toolico06, toolico06hover, toolico06hover)}
                onMouseEnter={() => handleMouseEnter('btnToolRotateCCW')}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('btnToolRotateCCW')}
                data-tooltip-id="tooltip-img"
                data-tooltip-content="ROTATE CCW" />

              <img
                id="btnToolFlipH"
                className="hover-cusor-pointer"
                src={getImageSrc('btnToolFlipH', toolico07, toolico07hover, toolico07hover)}
                onMouseEnter={() => handleMouseEnter('btnToolFlipH')}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('btnToolFlipH')}
                data-tooltip-id="tooltip-img"
                data-tooltip-content="FLIP H" />

              <img
                id="btnToolFlipV"
                className="hover-cusor-pointer"
                src={getImageSrc('btnToolFlipV', toolico08, toolico08hover, toolico08hover)}
                onMouseEnter={() => handleMouseEnter('btnToolFlipV')}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('btnToolFlipV')}
                data-tooltip-id="tooltip-img"
                data-tooltip-content="FLIP V" />

              <img
                id="btnToolLine"
                className="hover-cusor-pointer"
                src={getImageSrc('btnToolLine', toolico09, toolico09hover, toolico09hover)}
                onMouseEnter={() => handleMouseEnter('btnToolLine')}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('btnToolLine')}
                data-tooltip-id="tooltip-img"
                data-tooltip-content="LINE" />

              <img
                id="btnToolText"
                className="hover-cusor-pointer"
                src={getImageSrc('btnToolText', toolico10, toolico10hover, toolico10hover)}
                onMouseEnter={() => handleMouseEnter('btnToolText')}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('btnToolText')}
                data-tooltip-id="tooltip-img"
                data-tooltip-content="TEXT" />

              <img
                id="btnToolCircle"
                className="hover-cusor-pointer"
                src={getImageSrc('btnToolCircle', toolico11, toolico11hover, toolico11hover)}
                onMouseEnter={() => handleMouseEnter('btnToolCircle')}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('btnToolCircle')}
                data-tooltip-id="tooltip-img"
                data-tooltip-content="CIRCLE" />

              <img
                id="btnToolRectangle"
                className="hover-cusor-pointer"
                src={getImageSrc('btnToolRectangle', toolico12, toolico12hover, toolico12hover)}
                onMouseEnter={() => handleMouseEnter('btnToolRectangle')}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('btnToolRectangle')}
                data-tooltip-id="tooltip-img"
                data-tooltip-content="RECTANGLE" />

              <img
                id="btnToolRuler"
                className="hover-cusor-pointer"
                src={getImageSrc('btnToolRuler', toolico13, toolico13hover, toolico13hover)}
                onMouseEnter={() => handleMouseEnter('btnToolRuler')}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('btnToolRuler')}
                data-tooltip-id="tooltip-img"
                data-tooltip-content="RULER" />

              <img
                id="btnToolProtractor"
                className="hover-cusor-pointer"
                src={getImageSrc('btnToolProtractor', toolico14, toolico14hover, toolico14hover)}
                onMouseEnter={() => handleMouseEnter('btnToolProtractor')}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('btnToolProtractor')}
                data-tooltip-id="tooltip-img"
                data-tooltip-content="PROTRACTOR" />

              <img
                id="btnToolInvert"
                className="hover-cusor-pointer"
                src={getImageSrc('btnToolInvert', toolico15, toolico15hover, toolico15hover)}
                onMouseEnter={() => handleMouseEnter('btnToolInvert')}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('btnToolInvert')}
                data-tooltip-id="tooltip-img"
                data-tooltip-content="INVERT" />

              <img
                id="btnToolReset"
                className="hover-cusor-pointer"
                src={getImageSrc('btnToolReset', toolico16, toolico16hover, toolico16hover)}
                onMouseEnter={() => handleMouseEnter('btnToolReset')}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('btnToolReset')}
                data-tooltip-id="tooltip-img"
                data-tooltip-content="RESET" />

              <img
                id="btnToolImport"
                className="hover-cusor-pointer"
                src={getImageSrc('btnToolImport', toolico17, toolico17hover, toolico17hover)}
                onMouseEnter={() => handleMouseEnter('btnToolImport')}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('btnToolImport')}
                data-tooltip-id="tooltip-img"
                data-tooltip-content="IMPORT" />

              <img
                id="btnToolExport"
                className="hover-cusor-pointer"
                src={getImageSrc('btnToolExport', toolico18, toolico18hover, toolico18hover)}
                onMouseEnter={() => handleMouseEnter('btnToolExport')}
                onMouseLeave={handleMouseLeave}
                onClick={() => {handleClick('btnToolExport'); openFileExport()}}
                data-tooltip-id="tooltip-img"
                data-tooltip-content="EXPORT" />

              <img
                id="btnToolPencil"
                className="hover-cusor-pointer"
                src={getImageSrc('btnToolPencil', toolico19, toolico19hover, toolico19hover)}
                onMouseEnter={() => handleMouseEnter('btnToolPencil')}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('btnToolPencil')}
                data-tooltip-id="tooltip-img"
                data-tooltip-content="PENCIL" />

              <img
                id="btnToolPacs"
                className="hover-cusor-pointer"
                src={getImageSrc('btnToolPacs', toolico20, toolico20hover, toolico20hover)}
                onMouseEnter={() => handleMouseEnter('btnToolPacs')}
                onMouseLeave={handleMouseLeave}
                onClick={() => {handleClick('btnToolPacs'); openSendToPacs();}}
                data-tooltip-id="tooltip-img"
                data-tooltip-content="PACS" />

              <img
                id="btnToolUsbBackup"
                className="hover-cusor-pointer"
                src={getImageSrc('btnToolUsbBackup', toolico21, toolico21hover, toolico21hover)}
                onMouseEnter={() => handleMouseEnter('btnToolUsbBackup')}
                onMouseLeave={handleMouseLeave}
                onClick={() => {handleClick('btnToolUsbBackup'); openUseBackup();}}
                data-tooltip-id="tooltip-img"
                data-tooltip-content="USB BACKUP" />
            </div>

          </div>
        </div>
      </div>
      <Tooltip id="tooltip-img" className="img-tooltip" place={'bottom'} />
      {isOpenProcess && <ProcessModal />}
      {isOpenFileExport && <FileExportModal/>}
      {isOpenUseBackup && <UseBackupModal/>}
      {isOpenSendToPacs && <SendToPacsModal/>}
    </div>
  );
};

export default Review;
