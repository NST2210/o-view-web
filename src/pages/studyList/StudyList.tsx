import React, {useEffect, useState} from 'react';
import "../../design/sass/components/studyList.scss"
import {
    useOpenDeleteStudy,
    useOpenEditPatient,
    useOpenDeletePatient,
    useOpenNewStudy
} from "../../components/common/AppStore";
import TableCustom from "../../components/tableCustom/TableCustom";
import NewStudyModal from "../../components/modal/newStudyModal/NewStudyModal";
import StudyListSearch from "../../components/studyListSearch/StudyListSearch";
import {ReactComponent as IcArrowDown} from '../../assets/svg/icDownArrow.svg';
import EditPatientModal from "../../components/modal/editPatientModal/EditPatientModal";
import DeletePatientModal from "../../components/modal/deletePatientModal/DeletePatientModal";
import DeleteStudyModal from "../../components/modal/deleteStudyModal/DeleteStudyModal";
import TableCustomNoPagination from "../../components/tableCustomNoPagination/TableCustomNoPagination";

const StudyList = () => {

    const {openNewStudy, closeNewStudy, isOpenNewStudy} = useOpenNewStudy();
    const {openDeleteStudy, closeDeleteStudy, isOpenDeleteStudy} = useOpenDeleteStudy();
    const {openEditPatient, closeEditPatient, isOpenEditPatient} = useOpenEditPatient();
    const {openDeletePatient, closeDeletePatient, isOpenDeletePatient} = useOpenDeletePatient();

    const [data, setData] = useState([]);
    const [dataStudy, setDataStudy] = useState([]);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const rowsPerPage = 6;
    const columnsPatient = [

        {title: 'Patient ID', key: 'patientId', width: ''},
        {title: 'Patient Name', key: 'patientName', width: ''},
        {title: 'Birthday', key: 'birthday', width: ''},
        {title: 'Age', key: 'age', width: ''},
        {title: 'Sex', key: 'sex', width: ''},
        {title: 'Telephone', key: 'telephone', width: ''},
        {title: 'Adrress', key: 'adrres', width: ''},
    ];

    const columnsStudy = [
        {title: 'Study ID', key: 'studyId', width: ''},
        {title: 'ACC. NO.', key: 'accNo', width: ''},
        {title: 'Study Description', key: 'studyDescription', width: ''},
        {title: 'StudyDate', key: 'studyDate', width: ''},
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
    const rawListdataStudy = [
        {
            studyId: '20241095798',
            accNo: '011728463845798',
            studyDescription: 'hhj'
        },
    ];

    // Hàm fetchData thực hiện gọi API và cập nhật data, totalItems
    const fetchDataStudy = async (page, rowsPerPage) => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        // Giả sử response trả về có dạng: { items: [...], total: ... }
        setDataStudy(rawListdataStudy.slice(start, end));
        setTotalItems(rawListdataStudy.length);
    };

    const fetchDataPatient = async (page, rowsPerPage) => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        // Giả sử response trả về có dạng: { items: [...], total: ... }
        setData(rawListdata.slice(start, end));
    };

    // Gọi fetchData khi page thay đổi
    useEffect(() => {
        fetchDataPatient(1, rawListdata.length)
        fetchDataStudy(page, rowsPerPage);
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
                    <TableCustomNoPagination
                        columns={columnsPatient}
                        data={data}
                        rowsPerPage={rowsPerPage}
                        totalItems={totalItems}
                        classContainer=""
                        classTable=""
                    />
                    <div className="d-flex gap-2 justify-content-center study-button">
                        <button className="edit-btn" onClick={() => {
                            openNewStudy()
                        }}>EDIT
                        </button>
                        <button className="delete-btn" onClick={() => {
                            openDeleteStudy()
                        }}>DELETE
                        </button>
                    </div>
                    <TableCustom
                        columns={columnsStudy}
                        data={dataStudy}
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
            {isOpenNewStudy && <NewStudyModal
                isEdit={true}
            />}
            {isOpenDeleteStudy && <DeleteStudyModal/>}
            {isOpenEditPatient && <EditPatientModal/>}
            {isOpenDeletePatient && <DeletePatientModal/>}

        </div>
    );
};

export default StudyList;
