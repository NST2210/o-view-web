import ReactModal from 'react-modal';
import React, {useState} from 'react';
import {useOpenFileExport} from '../../common/AppStore';

const FileExportModal = () => {

    const {isOpenFileExport, closeFileExport} = useOpenFileExport();
    return (
        <ReactModal
            isOpen={isOpenFileExport}
            onRequestClose={closeFileExport}
            overlayClassName='detail-nft-overlay'
            className='Modal'
            ariaHideApp={false}
        >
            <div className='modal-primary h-fit-content w-40 modal-container'>
                <div className='modal-header'>
                    <span className='modal-title'>Export</span>
                    <button className='close-button' onClick={() => closeFileExport()}>×</button>
                </div>
                <div className="modal-header-divider-2"></div>
                <div className="modal-message">

                </div>
                <div className="d-flex gap-20px m-b-30 w-100 justify-content-center">
                    <button type='submit' className='submit-button'>OK</button>
                    <button type='submit' className='cancel-button'>CANCEL</button>
                </div>
            </div>

        </ReactModal>
    );
};

export default FileExportModal;
