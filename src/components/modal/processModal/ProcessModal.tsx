import ReactModal from 'react-modal';
import React from 'react';
import {useOpenProcessModal} from '../../common/AppStore';
import logo from '../../../assets/img/login_bg.png';
import { ReactComponent as Scan } from '../../../assets/svg/scan.svg';

const ProcessModal = () => {

    const { isOpenProcess, closeProcess } = useOpenProcessModal();
    return (
        <ReactModal
            isOpen={isOpenProcess}
            onRequestClose={closeProcess}
            overlayClassName="detail-nft-overlay"
            className="Modal"
            ariaHideApp={false}
        >
            <div className="modal-primary h-fit-content w-40 modal-send">
                <div className="modal-header">
                    <span className="modal-title">PROCESS</span>
                    <button className="close-button" onClick={() => closeProcess()}>×</button>
                </div>
                <div className="modal-header-divider-2"></div>
                <div className="d-block mt-3 align-items-center">
                    <img src={logo} width={145} height={120} alt="Logo" />
                    <div className="ml-54 mt-1 color-fff">AHIHI</div>
                </div>
                <div className="d-flex gap-120 w-100 m-t-100">
                    <div className="d-flex align-items-center color-fff fs-14 mt-3">
                        <input className="m-r-4" type="checkbox" />
                        <span>ADD ANNOTATIONS</span>
                    </div>
                    <button type="submit" className="submit-send gap-2">
                        <Scan className="icon-trash m-l-10" />
                        <span className="m-r-16">SUBMIT</span>
                    </button>
                </div>
            </div>

        </ReactModal>
    );
};

export default ProcessModal;
