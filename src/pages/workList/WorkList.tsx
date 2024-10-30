import React, {useState} from 'react';

import Sidebar from "../../components/sidebar/Sidebar";
import PatientTable from "../../components/patientTable/PatientTable";
import NewStudyModal from "../../components/modal/newStudyModal/NewStudyModal";
import {useOpenNewStory} from "../../components/common/AppStore";

const WorkList = () => {

    const {openNewStudy, closeNewStudy} = useOpenNewStory();
    return (
        <main className="dashboard">

            <div className="main-content">
                <Sidebar/>
                <PatientTable/>

                <div className="text-white" onClick={() => {
                    openNewStudy()
                }}>
                    click here
                </div>

                <NewStudyModal
                    selected={undefined}
                    setReload={undefined}
                    openWinningComplete={(data) => {
                        closeNewStudy();
                    }}
                />
            </div>
        </main>
    );
};
export default WorkList;
