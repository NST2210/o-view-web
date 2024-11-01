import ReactModal from 'react-modal';
import React, {useState} from 'react';
import {useOpenEditStudy} from '../../common/AppStore';

const EditStudyModal = () => {

    const {isOpenEditStudy, closeEditStudy} = useOpenEditStudy();
    return (
        <ReactModal
            isOpen={isOpenEditStudy}
            onRequestClose={closeEditStudy}
            overlayClassName='detail-nft-overlay'
            className='Modal'
            ariaHideApp={false}
        >
            <div className='modal-primary h-fit-content w-50 modal-container'>
                edit study
            </div>

        </ReactModal>
    );
};

export default EditStudyModal;
