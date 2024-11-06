import ReactModal from 'react-modal';
import React from 'react';
import {useOpenProcedureModal} from '../../common/AppStore';
import bodyParts from '../../../assets/img/bodyparts.png';
const ProcedureModal = () => {

    const {isOpenProcedure, closeProcedure} = useOpenProcedureModal();
    return (
        <ReactModal
            isOpen={isOpenProcedure}
            onRequestClose={closeProcedure}
            overlayClassName='detail-nft-overlay'
            className='Modal'
            ariaHideApp={false}
        >
            <div className='modal-primary h-fit-content w-40 modal-container'>
                <div className='modal-header'>
                    <span className='modal-title'>PROCEDURE</span>
                    <button className='close-button' onClick={() => closeProcedure()}>×</button>
                </div>
                <div className="modal-header-divider-2"></div>
                <div className="modal-message">
                    Are you sure you want to delete the selected patient (20240924418363)?.
                </div>
                <img src={bodyParts}/>
                <div className="d-flex gap-20px m-b-30 w-100 justify-content-center">
                    <button type='submit' className='submit-button'>OK</button>
                    <button type='submit' className='cancel-button'>CANCEL</button>
                </div>
            </div>

        </ReactModal>
    );
};

export default ProcedureModal;
