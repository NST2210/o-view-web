import ReactModal from 'react-modal';
import React, { useState } from 'react';
import { useOpenEditPatient } from '../../common/AppStore';
import {ReactComponent as Scan} from '../../../assets/svg/scan.svg';
import { ReactComponent as CalendarIcon } from '../../../assets/svg/ic_calendar.svg';

const EditPatientModal = () => {
    const [formData, setFormData] = useState({
        patientId: '',
        patientName: '',
        patientSex: '',
        patientBirth: '',
        patientAge: '',
        patientTel: '',
        patientAddress: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    const {isOpenEditPatient, closeEditPatient} = useOpenEditPatient();
    return (
        <ReactModal
            isOpen={isOpenEditPatient}
            onRequestClose={closeEditPatient}
            overlayClassName='detail-nft-overlay'
            className='Modal'
            ariaHideApp={false}
        >
            <div className='modal-primary h-fit-content w-50 modal-container modal-new-study'>
                <div className='modal-header'>
                    <span className='modal-title'>EDIT PATIENT</span>
                    <button className='close-button' onClick={() => closeEditPatient()}>×</button>
                </div>
                <div className="modal-header-divider"></div>
                <form onSubmit={handleSubmit} className='modal-form'>
                    <div className='form-group'>
                        <div className='form-row'>
                            <label>PATIENT ID</label>
                            <input
                              type='text'
                              name='patientId'
                              value={formData.patientId}
                              onChange={handleChange}
                              placeholder='Enter Patient Id'
                            />
                        </div>
                        <div className='form-row'>
                            <label>Patient Name</label>
                            <input
                              type='text'
                              name='patientName'
                              value={formData.patientName}
                              onChange={handleChange}
                              placeholder='Enter Patient Name'
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-row">
                            <label>PATIENT SEX</label>
                            <select
                              name="patientSex"
                              value={formData.patientSex}
                              onChange={handleChange}
                            >
                                <option value="">Select</option>
                                <option value="M">M</option>
                                <option value="F">F</option>
                            </select>
                        </div>
                        <div className="form-row date-range w-100">
                            <label className="w-100">PATIENT BIRTH</label>
                            <div className="date-range__wrapper">
                                <CalendarIcon className="calendar-icon" />
                                <input
                                    type="date"
                                    name="patientBirth"
                                    className="date-range__input w-100"
                                    value={formData.patientBirth}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-row">
                            <label>PATIENT AGE</label>
                            <input
                                type="text"
                                name="patientAge"
                                value={formData.patientAge}
                                onChange={handleChange}
                                placeholder="Enter Patient Age"
                            />
                        </div>
                        <div className='form-row'>
                            <label>PATIENT TEL</label>
                            <input
                              type='text'
                              name='patientTel'
                              value={formData.patientTel}
                              onChange={handleChange}
                              placeholder='Enter Patient Tel'
                            />
                        </div>
                    </div>
                    <div className='form-row-2'>
                        <label>PATIENT ADDRESS</label>
                        <input
                          type='text'
                          name='patientAddress'
                          value={formData.patientAddress}
                          onChange={handleChange}
                          placeholder='Enter Patient Address'
                        />
                    </div>
                    <div className="d-flex w-100 justify-content-center">
                        <button type="submit" className="submit-send gap-2">
                            <Scan className="icon-trash m-l-10" />
                            <span className="m-r-16">SUBMIT</span>
                        </button>
                    </div>
                </form>
            </div>

        </ReactModal>
    );
};

export default EditPatientModal;
