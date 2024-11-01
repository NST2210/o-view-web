import ReactModal from 'react-modal';
import React, {useState} from 'react';
import {useOpenDeletePatient} from '../../common/AppStore';

const DeletePatientModal = () => {

    const {isOpenDeletePatient, closeDeletePatient} = useOpenDeletePatient();
    return (
        <ReactModal
            isOpen={isOpenDeletePatient}
            onRequestClose={closeDeletePatient}
            overlayClassName='detail-nft-overlay'
            className='Modal'
            ariaHideApp={false}
        >
            <div className='modal-primary h-fit-content w-50 modal-container'>
                delete patient
            </div>

        </ReactModal>
    );
};

export default DeletePatientModal;
