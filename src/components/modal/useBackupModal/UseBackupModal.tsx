import ReactModal from 'react-modal';
import React, { useState } from 'react';
import { useOpenFileExport, useOpenUseBackup } from '../../common/AppStore';
import logo from '../../../assets/img/login_bg.png';

const UseBackupModal = () => {

  const { isOpenUseBackup, closeUseBackup } = useOpenUseBackup();
  const [formData, setFormData] = useState({ NONE: '' });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  return (
    <ReactModal
      isOpen={isOpenUseBackup}
      onRequestClose={closeUseBackup}
      overlayClassName="detail-nft-overlay"
      className="Modal"
      ariaHideApp={false}
    >
      <div className="modal-primary h-fit-content w-40 modal-use-backup">
        <div className="modal-header">
          <span className="modal-title">USP BACK UP</span>
          <button className="close-button" onClick={() => closeUseBackup()}>×</button>
        </div>
        <div className="modal-header-divider-2"></div>
        <div className="d-block mt-3 align-items-center">
          <img src={logo} width={145} height={120} alt="Logo" />
          <div className="ml-54 mt-1 color-fff">AHIHI</div>
        </div>
        <div className="w-100 m-t-110 d-flex align-items-center justify-content-center fw-bold fs-13 stand-by">STAND BY (0%)</div>
        <div className="d-flex gap-20 w-100 m-t-10">
          <span className="m-t-20">
            <select name="NONE" value={formData.NONE} onChange={handleChange}>
              <option value="">Select</option><option value="NONE">None</option>
            </select>
          </span>
          <button type="submit" className="button-01">EJECT</button>
          <button type="submit" className="button-01">ERASE</button>
          <button type="submit" className="button-01">WRITE</button>
          <button type="submit" className="usb-button">USB COPY</button>
        </div>
        <div className="d-flex align-items-center color-fff fs-14 mt-3">
          <input className="m-r-4" type="checkbox" />
          <span>ADD ANNOTATIONS</span>
        </div>
      </div>

    </ReactModal>
  );
};

export default UseBackupModal;
