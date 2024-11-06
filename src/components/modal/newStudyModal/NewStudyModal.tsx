import ReactModal from 'react-modal';
import React, {useState} from 'react';
import {useOpenNewStudy} from '../../common/AppStore';
import {ReactComponent as Scan} from '../../../assets/svg/scan.svg';

const NewStudyModal = ({data, isEdit}) => {
    const isEditModal = isEdit == true;
    const [formData, setFormData] = useState({
        accessionNumber: '',
        patientId: '',
        patientName: '',
        patientSex: '',
        patientBirth: '',
        studySchedule: '',
        patientAge: '',
        patientTel: '',
        patientAddress: '',
        description: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

        console.log("DATA",data)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    const {isOpenNewStudy, closeNewStudy} = useOpenNewStudy();
    return (
        <ReactModal
            isOpen={isOpenNewStudy}
            onRequestClose={closeNewStudy}
            overlayClassName='detail-nft-overlay'
            className='Modal'
            ariaHideApp={false}
        >
            <div className='modal-primary h-fit-content w-50 modal-container modal-new-study'>
                <div className='modal-header'>
                    <span className='modal-title'>{isEditModal ? 'EDIT STUDY' : 'NEW STUDY'}</span>
                    <button className='close-button' onClick={() => closeNewStudy()}>×</button>
                </div>
                <div className="modal-header-divider"></div>
                <form onSubmit={handleSubmit} className='modal-form'>
                    <div className='form-group'>
                        <div className='form-row'>
                            <label>ACCESSION NUMBER</label>
                            <input
                                type='text'
                                name='accessionNumber'
                                value={formData.accessionNumber}
                                onChange={handleChange}
                                placeholder='Enter Accession Number'
                            />
                        </div>
                        <div className='form-row'>
                            <label>Patient ID</label>
                            <input
                                type='text'
                                name='patientId'
                                value={formData.patientId}
                                onChange={handleChange}
                                placeholder='Enter Patient ID'
                            />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='form-row'>
                            <label>PATIENT NAME</label>
                            <input
                                type='text'
                                name='patientName'
                                value={formData.patientName}
                                onChange={handleChange}
                                placeholder='Enter Patient Name'
                            />
                        </div>
                        <div className='form-row'>
                            <label>PATIENT SEX</label>
                            <select
                                name='patientSex'
                                value={formData.patientSex}
                                onChange={handleChange}
                            >
                                <option value=''>Select</option>
                                <option value='M'>M</option>
                                <option value='F'>F</option>
                            </select>
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='form-row'>
                            <label>PATIENT BIRTH</label>
                            <input
                                type='date'
                                name='patientBirth'
                                value={formData.patientBirth}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-row'>
                            <label>STUDY SCHEDULE</label>
                            <input
                                type='date'
                                name='studySchedule'
                                value={formData.studySchedule}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='form-row'>
                            <label>PATIENT AGE</label>
                            <input
                                type='text'
                                name='patientAge'
                                value={formData.patientAge}
                                onChange={handleChange}
                                placeholder='Enter Patient Age'
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
                    <div className='form-row-2'>
                        <label className='pt-3'>DESCRIPTION</label>
                        <input
                            type='text'
                            name='description'
                            value={formData.description}
                            onChange={handleChange}
                            placeholder='Enter Description'
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

export default NewStudyModal;
