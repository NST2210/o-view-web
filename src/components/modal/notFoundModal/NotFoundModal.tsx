import ReactModal from 'react-modal';
import React from 'react';
import { useOpenNotFound } from '../../common/AppStore';

const NotFoundModal = () => {

    const {isOpenNotFound, closeNotFound} = useOpenNotFound();
    return (
        <ReactModal
            isOpen={isOpenNotFound}
            onRequestClose={closeNotFound}
            overlayClassName='detail-nft-overlay'
            className='Modal'
            ariaHideApp={false}
        >
            <div className='modal-primary h-fit-content w-40 modal-container'>
                <div className='modal-header'>
                    <span className='modal-title'>ATTENTION</span>
                    <button className='close-button' onClick={() => closeNotFound()}>×</button>
                </div>
                <div className="modal-header-divider-2"></div>
                <div className="modal-message">
                    The selected list could not be found.
                </div>
                <div className="d-flex gap-20px m-b-30 w-100 justify-content-center">
                    <button type='submit' className='submit-button' onClick={() => closeNotFound()}>OK</button>
                </div>
            </div>

        </ReactModal>
    );
};

export default NotFoundModal;
