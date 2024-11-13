import ReactModal from 'react-modal';
import React from 'react';
import { useOpenConfirmModal } from '../../common/AppStore';

const ConfirmModal = ({onSubmit, content}) => {

    const {isOpenConfirmModal, closeConfirmModal} = useOpenConfirmModal();
    return (
        <ReactModal
            isOpen={isOpenConfirmModal}
            onRequestClose={closeConfirmModal}
            overlayClassName='detail-nft-overlay'
            className='Modal'
            ariaHideApp={false}
        >
            <div className='modal-primary h-fit-content w-40 modal-container'>
                <div className='modal-header'>
                    <span className='modal-title'>ATTENTION</span>
                    <button className='close-button' onClick={() => closeConfirmModal()}>×</button>
                </div>
                <div className="modal-header-divider-2"></div>
                <div className="modal-message">
                    {content}
                </div>
                <div className="d-flex gap-20px m-b-30 w-100 justify-content-center">
                    <button type='submit' className='submit-button' onClick={()=>{
                        closeConfirmModal();
                        onSubmit();
                    }}>OK</button>
                    <button type='submit' className='cancel-button' onClick={()=>{
                        closeConfirmModal();
                    }}>CANCEL</button>
                </div>
            </div>

        </ReactModal>
    );
};

export default ConfirmModal;
