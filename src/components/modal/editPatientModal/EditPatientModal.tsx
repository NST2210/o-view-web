import ReactModal from 'react-modal';
import React, {useState} from 'react';
import {useOpenEditPatient, useOpenEditStudy} from '../../common/AppStore';

const EditPatientModal = () => {

    const {isOpenEditPatient, closeEditPatient} = useOpenEditPatient();
    return (
        <ReactModal
            isOpen={isOpenEditPatient}
            onRequestClose={closeEditPatient}
            overlayClassName='detail-nft-overlay'
            className='Modal'
            ariaHideApp={false}
        >
            <div className='modal-primary h-fit-content w-50 modal-container'>
                edit patient
            </div>

        </ReactModal>
    );
};

export default EditPatientModal;
