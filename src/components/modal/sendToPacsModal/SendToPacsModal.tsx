import ReactModal from 'react-modal';
import React, {useState} from 'react';
import {useOpenSendToPacs} from '../../common/AppStore';

const SendToPacsModal = () => {

    const {isOpenSendToPacs, closeSendToPacs} = useOpenSendToPacs();
    return (
        <ReactModal
            isOpen={isOpenSendToPacs}
            onRequestClose={closeSendToPacs}
            overlayClassName='detail-nft-overlay'
            className='Modal'
            ariaHideApp={false}
        >
            <div className='modal-primary h-fit-content w-40 modal-container'>
                <div className='modal-header'>
                    <span className='modal-title'>Save to pack</span>
                    <button className='close-button' onClick={() => closeSendToPacs()}>×</button>
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

export default SendToPacsModal;
