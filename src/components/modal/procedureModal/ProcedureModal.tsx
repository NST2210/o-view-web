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
    { id: 2, label: 'CHEST' },
    { id: 3, label: 'ABDOMEN' },
    { id: 4, label: 'SHOULDER LEFT' },
    { id: 5, label: 'SHOULDER RIGHT' },
    { id: 6, label: 'CSPINE' },
    { id: 7, label: 'HIP' },
    { id: 8, label: 'KNEE LEFT' },
    { id: 9, label: 'KNEE RIGHT' }
  ];

  const subOptionsList = {
    1: [
      { id: 'skull_ap', label: 'SKULL AP' }, { id: 'skull_lat', label: 'SKULL LAT' },
      { id: 'skull_lats', label: 'SKULL LATS' }, { id: 'skull_lat1', label: 'SKULL LAT1' }
    ],
    2: [{ id: 'CHEST', label: 'CHEST' }],
    3: [{ id: 'ABDOMEN', label: 'ABDOMEN' }, { id: 'ABDOMEN 1', label: 'ABDOMEN 1' }],
    4: [{ id: 'SHOULDER_L', label: 'SHOULDER LEFT' }],
    5: [{ id: 'SHOULDER_R', label: 'SHOULDER RIGHT' }],
    6: [{ id: 'CSPINE', label: 'CSPINE' }],
    7: [{ id: 'HIP', label: 'HIP' }],
    8: [{ id: 'KNEE_L', label: 'KNEE LEFT' }],
    9: [{ id: 'KNEE_R', label: 'KNEE RIGHT' }],
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

  const handleClickArea = (id) =>{
    setSelectedOption(optionsList[id].id);
    setSelectedSubOptions([]);
  }
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
          <div id="bodypart" className='position-relative'>
            <img src={bodyParts} />
            <span className="area skull" onClick={() => handleClickArea(0)}></span>
            <span className="area chest" onClick={() => handleClickArea(1)}></span>
            <span className="area abdomen" onClick={() => handleClickArea(2)}></span>
            <span className="area shoulder_l" onClick={() => handleClickArea(3)}></span>
            <span className="area shoulder_r" onClick={() => handleClickArea(4)}></span>
            <span className="area cspine" onClick={() => handleClickArea(5)}></span>
            <span className="area hip" onClick={() => handleClickArea(6)}></span>
            <span className="area knee_l" onClick={() => handleClickArea(7)}></span>
            <span className="area knee_r" onClick={() => handleClickArea(8)}></span>
          </div>
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
                  <div key={subOption.id} className="color-767b7f hover-cusor-pointer" onClick={() => handleSubOptionClick(subOption)}>
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
