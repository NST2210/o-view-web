import ReactModal from 'react-modal';
import React from 'react';
import { useOpenDeleteStudy } from '../../common/AppStore';

const DeleteStudyModal = () => {

  const { isOpenDeleteStudy, closeDeleteStudy } = useOpenDeleteStudy();
  return (
    <ReactModal
      isOpen={isOpenDeleteStudy}
      onRequestClose={closeDeleteStudy}
      overlayClassName='detail-nft-overlay'
      className='Modal'
      ariaHideApp={false}
    >
      <div className='modal-primary h-fit-content modal-container'>
        <div className='modal-header'>
          <span className='modal-title'>ATTENTION</span>
          <button className='close-button' onClick={() => closeDeleteStudy()}>×</button>
        </div>
        <div className="modal-header-divider-2"></div>
        <div className="modal-message">
          Are you sure you want to delete the selected worklist list? Deletion is irreversible.
        </div>
        <div className="d-flex gap-20px m-b-30 w-100 justify-content-center">
          <button type='submit' className='submit-button'>OK</button>
          <button type='submit' className='cancel-button'>CANCEL</button>
        </div>
      </div>

    </ReactModal>
  );
};

export default DeleteStudyModal;
