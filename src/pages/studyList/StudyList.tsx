import React, {useState} from 'react';
// import moment from 'moment';
import "./studyList.scss"

const StudyList = () => {
    // States for patient info
    const [patientInfo, setPatientInfo] = useState({
        id: '0000000000',
        name: 'Unknown',
        gender: 'male',
        birth: '0000.00.00',
    });

    // State for dates
    // const [scheduleStart, setScheduleStart] = useState(moment().format('YYYY-MM-DD'));
    // const [scheduleEnd, setScheduleEnd] = useState(moment().add(1, 'day').format('YYYY-MM-DD'));
    // const [birthStart, setBirthStart] = useState(moment().format('YYYY-MM-DD'));
    // const [birthEnd, setBirthEnd] = useState(moment().add(1, 'day').format('YYYY-MM-DD'));

    const [scheduleStart, setScheduleStart] = useState("");
    const [scheduleEnd, setScheduleEnd] = useState("");
    const [birthStart, setBirthStart] = useState("");
    const [birthEnd, setBirthEnd] = useState("");

    // Function to update patient info
    const updatePatientInfo = (id, name, gender, birth) => {
        setPatientInfo({
            id,
            name,
            gender: gender.toUpperCase() === 'F' || gender.toUpperCase() === 'FEMALE' ? 'female' : 'male',
            birth,
        });
    };

    return (
        <div className="study-list-container">
            <div className="left_tools">
                {/* Patient Profile */}
                <section id="sct_profile">
                    <div className="gender">
                        <img
                            src={`img/studylist/${patientInfo.gender}.png`}
                            alt={patientInfo.gender}
                        />
                    </div>
                    <span className="patient_name">{patientInfo.name}</span>
                    <span className="patient_detail">
          <span className="patient_id">{patientInfo.id}</span>
          <br/>
          <span className="patient_birth">{patientInfo.birth}</span>
        </span>
                </section>

                {/* Modality Section */}
                <section id="sct_modality">
                    <button id="modality" type="button" className="studylist-checkbox"></button>
                    <ul className="button_list">
                        {['All', 'DX', 'CR'].map((modality) => (
                            <li key={modality}>
                                <label className="modality_checkbox">
                                    <input type="checkbox" id={`modality_${modality.toLowerCase()}`}/>
                                    <span className="checkmark">
                  <span className="fa-solid fa-check"></span>
                </span>
                                    {modality}
                                </label>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Schedule Section */}
                <section id="sct_schedule">
                    <button id="schedule" type="button" className="studylist-checkbox"></button>
                    <ul className="date_list">
                        <li className="start">
                            <input
                                type="date"
                                id="schedule_start"
                                max="9999-12-31"
                                value={scheduleStart}
                                onChange={(e) => setScheduleStart(e.target.value)}
                            />
                        </li>
                        <li className="end">
                            <input
                                type="date"
                                id="schedule_end"
                                max="9999-12-31"
                                value={scheduleEnd}
                                onChange={(e) => setScheduleEnd(e.target.value)}
                            />
                        </li>
                    </ul>
                </section>

                {/* Birth Section */}
                <section id="sct_birth">
                    <button id="birth" type="button" className="studylist-checkbox"></button>
                    <ul className="date_list">
                        <li className="start">
                            <input
                                type="date"
                                id="birth_start"
                                max="9999-12-31"
                                value={birthStart}
                                onChange={(e) => setBirthStart(e.target.value)}
                            />
                        </li>
                        <li className="end">
                            <input
                                type="date"
                                id="birth_end"
                                max="9999-12-31"
                                value={birthEnd}
                                onChange={(e) => setBirthEnd(e.target.value)}
                            />
                        </li>
                    </ul>
                </section>

                {/* Search Section */}
                <section id="sct_search">
                    <select id="sch_category">
                        <option>ALL</option>
                    </select>
                    <input type="text" id="sch_keyword" placeholder="Insert Keyword"/>
                    <button id="btnSearch" type="button">
                        <img src="img/worklist/btnSearch.png" alt="Search"/>
                    </button>
                </section>
            </div>
        </div>
    );
};

export default StudyList;
