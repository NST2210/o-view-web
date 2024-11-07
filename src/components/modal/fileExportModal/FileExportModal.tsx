import ReactModal from 'react-modal';
import React, { useState } from 'react';
import { useOpenFileExport } from '../../common/AppStore';
import logo from '../../../../src/assets/img/login_bg.png';
import {ReactComponent as Scan} from '../../../assets/svg/scan.svg';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow_accordion.svg';

const FileExportModal = () => {
  const [formData, setFormData] = useState({ DCM: '' });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const { isOpenFileExport, closeFileExport } = useOpenFileExport();
  return (
    <ReactModal
      isOpen={isOpenFileExport}
      onRequestClose={closeFileExport}
      overlayClassName="detail-nft-overlay"
      className="Modal"
      ariaHideApp={false}
    >
      <div className="modal-primary h-fit-content w-700px modal-file">
        <div className="modal-header">
          <span className="modal-title">Export</span>
          <button className="close-button" onClick={() => closeFileExport()}>×</button>
        </div>
        <div className="modal-header-divider-2"></div>
        <div className="d-block mt-3 align-items-center">
          <img src={logo} width={145} height={120} alt="Logo" />
          <div className="ml-54 mt-1 color-fff">AHIHI</div>
        </div>
        <div className="d-flex gap-155 w-100 m-t-100">
          <div className="m-t-20 select-container">
            <select name="DCM" value={formData.DCM} onChange={handleChange}>
              <option value="">Select</option><option value="DCM">DCM</option>
              <option value="BMP">BMP</option>
              <option value="GIF">GIF</option>
              <option value="JPG">JPG</option>
              <option value="PNG">PNG</option>
            </select>
            <Arrow className="arrow-icon" />
          </div>
          <button type="submit" className="submit-file gap-2">
            <Scan className="icon-trash m-l-10"/>
            <span className="m-r-16">SUBMIT</span>
          </button>
        </div>
      </div>

    </ReactModal>
  );
};

export default FileExportModal;
