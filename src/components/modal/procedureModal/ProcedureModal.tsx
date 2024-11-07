import ReactModal from 'react-modal';
import React, { useState } from 'react';
import { useOpenProcedureModal } from '../../common/AppStore';
import bodyParts from '../../../assets/img/bodyparts.png';
import { ReactComponent as IcArrowDown } from '../../../assets/svg/icDownArrow.svg';
import { ReactComponent as Scan } from '../../../assets/svg/scan.svg';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow_accordion.svg';

const ProcedureModal = () => {

  const { isOpenProcedure, closeProcedure } = useOpenProcedureModal();
  const optionsList = [
    { id: 1, label: 'SKULL 1' },
    { id: 2, label: 'SKULL 2' },
    { id: 3, label: 'SKULL 3' }
  ];

  const subOptionsList = {
    1: [
      { id: 'skull_ap', label: 'SKULL AP' }, { id: 'skull_lat', label: 'SKULL LAT' },
      { id: 'skull_lats', label: 'SKULL LATS' }, { id: 'skull_lat1', label: 'SKULL LAT1' }
    ],
    2: [{ id: 'skull_oblique', label: 'SKULL OBLIQUE' }],
    3: [{ id: 'skull_ct', label: 'SKULL CT' }, { id: 'skull_mri', label: 'SKULL MRI' }]
  };

  const [selectedOption, setSelectedOption] = useState(optionsList[0].id);
  const [selectedSubOptions, setSelectedSubOptions] = useState([]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedSubOptions([]);
  };

  const handleSubOptionClick = (subOption) => {
    if (!selectedSubOptions.some(option => option.id === subOption.id)) {
      setSelectedSubOptions([...selectedSubOptions, subOption]);
    }
  };

  const clearSubOption = (subOptionId) => {
    setSelectedSubOptions(selectedSubOptions.filter(option => option.id !== subOptionId));
  };

  return (
    <ReactModal
      isOpen={isOpenProcedure}
      onRequestClose={closeProcedure}
      overlayClassName="detail-nft-overlay"
      className="Modal"
      ariaHideApp={false}
    >
      <div className="modal-primary h-fit-content w-40 modal-procedure">
        <div className="modal-header">
          <span className="modal-title">PROCEDURE</span>
          <button className="close-button" onClick={() => closeProcedure()}>×</button>
        </div>
        <div className="modal-header-divider-2"></div>
        <div className="modal-message">
        </div>
        <div className="d-flex w-100">
          <img src={bodyParts} />
          <div className="m-l-40 w-100">
            <div className="w-100">
              <div className="align-items-center d-flex color-text fw-bold">
                <IcArrowDown className="m-r-10" />
                Procedure Step EXAM
              </div>
              <div className="select-container m-t-10">
                <select id="mySelect" value={selectedOption} onChange={handleChange}>
                  {optionsList.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <Arrow className="arrow-icon" />
              </div>
            </div>

            <div className="w-100">
              <div className="align-items-center d-flex color-95a3af m-t-20 fw-bold">
                <IcArrowDown className="m-r-10" />
                Procedure Step Description
              </div>
              <div className="data-descrip m-t-10">
                {subOptionsList[selectedOption]?.map((subOption) => (
                  <div key={subOption.id} className="color-767b7f" onClick={() => handleSubOptionClick(subOption)}>
                    {subOption.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="w-100">
              <div className="align-items-center d-flex color-95a3af m-t-20 fw-bold">
                <IcArrowDown className="m-r-10" />
                Scheduled Procedure Step
              </div>
              <div
                className="data-descrip m-t-10">
                {selectedSubOptions.length > 0 ? (
                  selectedSubOptions.map(subOption => (
                    <div key={subOption.id}
                         className="d-flex w-100 align-items-center justify-content-center justify-content-between">
                      <label>{subOption.label}</label>
                      <button className="close-button" onClick={() => clearSubOption(subOption.id)}>×</button>
                    </div>
                  ))
                ) : (
                  <span>Please select a procedure step</span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center m-t-20">
          <button type="submit" className="submit-procedure gap-2">
            <Scan className="icon-trash m-l-10" />
            <span className="m-r-16">SUBMIT</span>
          </button>
        </div>
      </div>

    </ReactModal>
  );
};

export default ProcedureModal;
