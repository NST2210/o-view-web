import React, {useEffect, useState} from 'react';
import "../../design/sass/components/studyList.scss"
import {useOpenEditPatient, useOpenEditStudy, useOpenNewStudy} from "../../components/common/AppStore";
import TableCustom from "../../components/tableCustom/TableCustom";
import NewStudyModal from "../../components/modal/newStudyModal/NewStudyModal";
import StudyListSearch from "../../components/studyListSearch/StudyListSearch";
import {ReactComponent as IcArrowDown} from '../../assets/svg/icDownArrow.svg';
import EditStudyModal from "../../components/modal/editStudyModal/EditStudyModal";
import EditPatientModal from "../../components/modal/editPatientModal/EditPatientModal";

const StudyList = () => {

    const {openEditStudy, closeEditStudy, isOpenEditStudy} = useOpenEditStudy();
    const {openEditPatient, closeEditPatient, isOpenEditPatient} = useOpenEditPatient();

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const rowsPerPage = 5;
    const columns = [
        {title: 'ACC. NO.', key: 'accNo'},
        {title: 'Patient ID', key: 'patientId'},
        {title: 'Patient Name', key: 'patientName'},
        {title: 'Birthday', key: 'birthday'},
        {title: 'Age', key: 'age'},
        {title: 'Sex', key: 'sex'},
        {title: 'Telephone', key: 'telephone'},
        {title: 'Adrress', key: 'adrres'},
    ];

    const rawListdata = [
        {
            accNo: '011728463845798',
            patientId: '20241095798',
            patientName: 'hhj',
            birthday: '2024-10-09',
            age: '0Y',
            sex: 'M',
            status: 'IN PROGRESS',
            rPhysician: 'ADMIN',
            studyDescription: 'ehhe'
        },
        {
            accNo: '021728463845798',
            patientId: '20241095798',
            patientName: 'hhj',
            birthday: '2024-10-09',
            age: '0Y',
            sex: 'M',
            status: 'IN PROGRESS',
            rPhysician: 'ADMIN',
            studyDescription: 'ehhe'
        },
        {
            accNo: '031728463845798',
            patientId: '20241095798',
            patientName: 'hhj',
            birthday: '2024-10-09',
            age: '0Y',
            sex: 'M',
            status: 'IN PROGRESS',
            rPhysician: 'ADMIN',
            studyDescription: 'ehhe'
        },
        {
            accNo: '041728463845798',
            patientId: '20241095798',
            patientName: 'hhj',
            birthday: '2024-10-09',
            age: '0Y',
            sex: 'M',
            status: 'IN PROGRESS',
            rPhysician: 'ADMIN',
            studyDescription: 'ehhe'
        },
        {
            accNo: '051728463845798',
            patientId: '20241095798',
            patientName: 'hhj',
            birthday: '2024-10-09',
            age: '0Y',
            sex: 'M',
            status: 'IN PROGRESS',
            rPhysician: 'ADMIN',
            studyDescription: 'ehhe'
        },
        {
            accNo: '061728463845798',
            patientId: '20241095798',
            patientName: 'hhj',
            birthday: '2024-10-09',
            age: '0Y',
            sex: 'M',
            status: 'IN PROGRESS',
            rPhysician: 'ADMIN',
            studyDescription: 'ehhe'
        },
        {
            accNo: '071728463845798',
            patientId: '20241095798',
            patientName: 'hhj',
            birthday: '2024-10-09',
            age: '0Y',
            sex: 'M',
            status: 'IN PROGRESS',
            rPhysician: 'ADMIN',
            studyDescription: 'ehhe'
        },
        {
            accNo: '081728463845798',
            patientId: '20241095798',
            patientName: 'hhj',
            birthday: '2024-10-09',
            age: '0Y',
            sex: 'M',
            status: 'IN PROGRESS',
            rPhysician: 'ADMIN',
            studyDescription: 'ehhe'
        },
        {
            accNo: '091728463845798',
            patientId: '20241095798',
            patientName: 'hhj',
            birthday: '2024-10-09',
            age: '0Y',
            sex: 'M',
            status: 'IN PROGRESS',
            rPhysician: 'ADMIN',
            studyDescription: 'ehhe'
        },
        {
            accNo: '101728463845798',
            patientId: '20241095798',
            patientName: 'hhj',
            birthday: '2024-10-09',
            age: '0Y',
            sex: 'M',
            status: 'IN PROGRESS',
            rPhysician: 'ADMIN',
            studyDescription: 'ehhe'
        },
        {
            accNo: '11728463845798',
            patientId: '20241095798',
            patientName: 'hhj',
            birthday: '2024-10-09',
            age: '0Y',
            sex: 'M',
            status: 'IN PROGRESS',
            rPhysician: 'ADMIN',
            studyDescription: 'ehhe'
        },
        {
            accNo: '121728463845798',
            patientId: '20241095798',
            patientName: 'hhj',
            birthday: '2024-10-09',
            age: '0Y',
            sex: 'M',
            status: 'IN PROGRESS',
            rPhysician: 'ADMIN',
            studyDescription: 'ehhe'
        },
        {
            accNo: '131728463845798',
            patientId: '20241095798',
            patientName: 'hhj',
            birthday: '2024-10-09',
            age: '0Y',
            sex: 'M',
            status: 'IN PROGRESS',
            rPhysician: 'ADMIN',
            studyDescription: 'ehhe'
        },
        {
            accNo: '141728463845798',
            patientId: '20241095798',
            patientName: 'hhj',
            birthday: '2024-10-09',
            age: '0Y',
            sex: 'M',
            status: 'IN PROGRESS',
            rPhysician: 'ADMIN',
            studyDescription: 'ehhe'
        },
        {
            accNo: '151728463845798',
            patientId: '20241095798',
            patientName: 'hhj',
            birthday: '2024-10-09',
            age: '0Y',
            sex: 'M',
            status: 'IN PROGRESS',
            rPhysician: 'ADMIN',
            studyDescription: 'ehhe'
        },
        {
            accNo: '161728463845798',
            patientId: '20241095798',
            patientName: 'hhj',
            birthday: '2024-10-09',
            age: '0Y',
            sex: 'M',
            status: 'IN PROGRESS',
            rPhysician: 'ADMIN',
            studyDescription: 'ehhe'
        },
        {
            accNo: '171728463845798',
            patientId: '20241095798',
            patientName: 'hhj',
            birthday: '2024-10-09',
            age: '0Y',
            sex: 'M',
            status: 'IN PROGRESS',
            rPhysician: 'ADMIN',
            studyDescription: 'ehhe'
        },
        {
            accNo: '181728463845798',
            patientId: '20241095798',
            patientName: 'hhj',
            birthday: '2024-10-09',
            age: '0Y',
            sex: 'M',
            status: 'IN PROGRESS',
            rPhysician: 'ADMIN',
            studyDescription: 'ehhe'
        },
        {
            accNo: '191728463845798',
            patientId: '20241095798',
            patientName: 'hhj',
            birthday: '2024-10-09',
            age: '0Y',
            sex: 'M',
            status: 'IN PROGRESS',
            rPhysician: 'ADMIN',
            studyDescription: 'ehhe'
        },
        {
            accNo: '201728463845798',
            patientId: '20241095798',
            patientName: 'hhj',
            birthday: '2024-10-09',
            age: '0Y',
            sex: 'M',
            status: 'IN PROGRESS',
            rPhysician: 'ADMIN',
            studyDescription: 'ehhe'
        },
        {
            accNo: '211728463845798',
            patientId: '20241095798',
            patientName: 'hhj',
            birthday: '2024-10-09',
            age: '0Y',
            sex: 'M',
            status: 'IN PROGRESS',
            rPhysician: 'ADMIN',
            studyDescription: 'ehhe'
        },
        {
            accNo: '211728463845798',
            patientId: '20241095798',
            patientName: 'hhj',
            birthday: '2024-10-09',
            age: '0Y',
            sex: 'M',
            status: 'IN PROGRESS',
            rPhysician: 'ADMIN',
            studyDescription: 'ehhe'
        },


        // Add more rows as needed
    ];

    // Hàm fetchData thực hiện gọi API và cập nhật data, totalItems
    const fetchData = async (page, rowsPerPage) => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        // Giả sử response trả về có dạng: { items: [...], total: ... }
        setData(rawListdata.slice(start, end));
        setTotalItems(rawListdata.length);
    };

    // Gọi fetchData khi page thay đổi
    useEffect(() => {
        fetchData(page, rowsPerPage);
    }, [page]);

    // Xử lý thay đổi trang
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <div className="study-list">
            <div className="study-list-content">
                <StudyListSearch/>
                <div className="study-list-table-container d-flex flex-column gap-2">
                    <TableCustom
                        columns={columns}
                        data={data}
                        page={page}
                        totalItems={totalItems}
                        rowsPerPage={rowsPerPage}
                        classContainer=""
                        classTable=""
                        classPagination=""
                        onPageChange={handlePageChange}
                    />
                    <div className="d-flex gap-2 justify-content-center study-button">
                        <button className="edit-btn" onClick={() => {
                            openEditStudy()
                        }}>EDIT
                        </button>
                        <button className="delete-btn">DELETE</button>
                    </div>
                    <TableCustom
                        columns={columns}
                        data={data}
                        page={page}
                        totalItems={totalItems}
                        rowsPerPage={rowsPerPage}
                        classContainer=""
                        classTable=""
                        classPagination=""
                        onPageChange={handlePageChange}
                    />
                </div>
                <div className="d-flex flex-column gap-1 study-list-function">
                    <div className="d-flex function-title justify-content-space-between">
                        <div className="d-flex flex-center gap-10px">
                            <IcArrowDown/>
                            <div>ER_202409..</div>
                            <div>/</div>
                            <div>202409..</div>
                        </div>
                        <div className="d-flex flex-center h-40px w-40px">0</div>
                    </div>
                    <div className="function-content h-400px"></div>
                    <div className="function-content-2 h-80px"></div>
                    <div className="action-container d-flex flex-column gap-2 function-button">
                        <button>FILE EXPORT</button>
                        <button>USE BACKUP</button>
                        <button>SAVE TO PACK</button>
                    </div>
                </div>

            </div>
            {isOpenEditStudy && <EditStudyModal
                selected={undefined}
                setReload={undefined}
                openWinningComplete={(data) => {
                    closeEditStudy();
                }}
            />}
            {isOpenEditPatient && <EditPatientModal
                selected={undefined}
                setReload={undefined}
                openWinningComplete={(data) => {
                    closeEditPatient();
                }}
            />}
        </div>
    );
};

export default StudyList;
