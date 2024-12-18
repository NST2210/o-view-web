import React, {useContext, useEffect, useState} from 'react';
import '../../design/sass/pages/studyList.scss';
import {
    useOpenDeletePatient,
    useOpenDeleteStudy,
    useOpenEditPatient,
    useOpenFileExport,
    useOpenNewStudy, useOpenNotFound,
    useOpenSendToPacs,
    useOpenUseBackup
} from '../../components/common/AppStore';
import TableCustom from '../../components/tableCustom/TableCustom';
import NewStudyModal from '../../components/modal/newStudyModal/NewStudyModal';
import StudyListSearch from '../../components/studyListSearch/StudyListSearch';
import {ReactComponent as IcArrowDown} from '../../assets/svg/icDownArrow.svg';
import EditPatientModal from '../../components/modal/editPatientModal/EditPatientModal';
import DeletePatientModal from '../../components/modal/deletePatientModal/DeletePatientModal';
import DeleteStudyModal from '../../components/modal/deleteStudyModal/DeleteStudyModal';
import TableCustomNoPagination from '../../components/tableCustomNoPagination/TableCustomNoPagination';
import FileExportModal from '../../components/modal/fileExportModal/FileExportModal';
import UseBackupModal from '../../components/modal/useBackupModal/UseBackupModal';
import SendToPacsModal from '../../components/modal/sendToPacsModal/SendToPacsModal';
import {ReactComponent as IconCheckBox} from '../../assets/svg/icCheckbox.svg';
import {ReactComponent as IconTrash2} from '../../assets/svg/icTrash2.svg';
import {AppContext} from "../../components/common/AppContext";

const StudyList = () => {

    const {openNewStudy, isOpenNewStudy} = useOpenNewStudy();
    const {openDeleteStudy, isOpenDeleteStudy} = useOpenDeleteStudy();
    const {isOpenEditPatient} = useOpenEditPatient();
    const {isOpenDeletePatient} = useOpenDeletePatient();
    const {openNotFound} = useOpenNotFound();
    const {openFileExport, isOpenFileExport} = useOpenFileExport();
    const {openSendToPacs, isOpenSendToPacs} = useOpenSendToPacs();
    const {openUseBackup, isOpenUseBackup} = useOpenUseBackup();

    const [data, setData] = useState([]);
    const [dataStudy, setDataStudy] = useState([]);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const rowsPerPage = 6;
    const columnsPatient = [

        {title: 'Patient ID', key: 'patientId', width: '172px'},
        {title: 'Patient Name', key: 'patientName', width: '218px'},
        {title: 'Birthday', key: 'birthday', width: '154px'},
        {title: 'Age', key: 'age', width: '96px'},
        {title: 'Sex', key: 'sex', width: '91px'},
        {title: 'Telephone', key: 'telephone', width: '176px'},
        {title: 'Adrress', key: 'adrres', width: '141px'},
    ];

    const columnsStudy = [
        {title: 'Study ID', key: 'studyId', width: '232px'},
        {title: 'ACC. NO.', key: 'accNo', width: '298px'},
        {title: 'Study Description', key: 'studyDescription', width: '306px'},
        {title: 'StudyDate', key: 'studyDate', width: '200px'},
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
    const fetchDataStudy = async (page: any, rowsPerPage: any) => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        // Giả sử response trả về có dạng: { items: [...], total: ... }
        setDataStudy(rawListdataStudy.slice(start, end));
        setTotalItems(rawListdataStudy.length);
    };

    const fetchDataPatient = async (page: any, rowsPerPage: any) => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        // Giả sử response trả về có dạng: { items: [...], total: ... }
        setData(rawListdata.slice(start, end));
    };

    // Gọi fetchData khi page thay đổi
    useEffect(() => {
        fetchDataPatient(1, rawListdata.length);
        fetchDataStudy(page, rowsPerPage);
        setStudyData('');
        setPatientData('');
    }, [page]);

    // Xử lý thay đổi trang
    const handlePageChange = (newPage: any) => {
        setPage(newPage);
    };

    const context = useContext(AppContext);

    if (!context) {
        throw new Error("AppContext must be used within an AppProvider");
    }

    const { patientData, setPatientData, studyData, setStudyData } = context;


    const handleClickRowPatient = (row) => {
        setPatientData(row);
        console.log("patientData", row)
    };

    const handleClickRowStudy = (row) => {
        setStudyData(row);
        console.log("studyData", row)
    };

    useEffect(() => {
        fetchDataPatient(1, rawListdata.length)
        fetchDataStudy(page, rowsPerPage);
        setStudyData('');
        setPatientData('');
    }, []);

    const isEmty = (data) =>{
        if (data == '' || data == null || data == undefined){
            return true
        }
        return false;
    }

    return (
        <div className="study-list">
            <div className="study-list-content">
                <StudyListSearch/>
                <div className="study-list-table-container d-flex flex-column gap-2">
                    <TableCustomNoPagination
                        columns={columnsPatient}
                        data={data}
                        rowsPerPage={rowsPerPage}
                        classContainer=""
                        classTable=""
                        onClickRow={handleClickRowPatient}
                    />
                    <div className="w-100 d-flex flex-end p-t-6 p-b-6">
                        <div className="d-flex gap-2 justify-content-center study-button">
                            <button className="edit-btn  d-flex align-items-center align-content-center w-auto gap-1"
                                    onClick={() => {
                                        if (isEmty(studyData)){
                                            openNotFound()
                                        }else {
                                            openNewStudy()
                                        }
                                    }}><IconCheckBox className="m-l-10"/>
                                <span className="m-r-16"> EDIT</span>
                            </button>
                            <button className="delete-btn d-flex align-items-center align-content-center w-auto gap-1"
                                    onClick={() => {
                                        if (isEmty(studyData)){
                                            openNotFound()
                                        }else {
                                            openDeleteStudy()
                                        }
                                    }}><IconTrash2 className="icon-trash m-l-10"/>
                                <span className="m-r-16"> DELETE</span>
                            </button>
                        </div>
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
                        onClickRow={handleClickRowStudy}
                    />
                </div>
                <div className="d-flex flex-column gap-1 study-list-function">
                    <div className="d-flex function-title justify-content-space-between">
                        <div className="title-info d-flex flex-center gap-3px">
                            <IcArrowDown className="m-r-10"/>
                            <div className="title-info__name">ER_202409..</div>
                            <div className="title-info__slash">/</div>
                            <div className="title-info__id">202409..</div>
                        </div>
                        <div className="d-flex flex-center h-30px w-45px count-info">0</div>
                    </div>
                    <div className="function-content h-400px"></div>
                    <div className="function-content-2 h-80px"></div>
                    <div className="action-container d-flex flex-column gap-2 function-button m-b-10">
                        <button onClick={() => {
                            if (isEmty(studyData)){
                                openNotFound()
                            }else {
                                openFileExport()
                            }
                        }}>FILE EXPORT
                        </button>
                        <button onClick={() => {
                            if (isEmty(studyData)){
                                openNotFound()
                            }else {
                                openUseBackup()
                            }
                        }}>USE BACKUP
                        </button>
                        <button onClick={() => {
                            if (isEmty(studyData)){
                                openNotFound()
                            }else {
                                openSendToPacs()
                            }
                        }}>SAVE TO PACS
                        </button>
                    </div>
                </div>

            </div>
            {isOpenNewStudy && <NewStudyModal
                isEdit={true} data={undefined}
            />}
            {isOpenDeleteStudy && <DeleteStudyModal/>}
            {isOpenEditPatient && <EditPatientModal/>}
            {isOpenDeletePatient && <DeletePatientModal/>}
            {isOpenFileExport && <FileExportModal/>}
            {isOpenUseBackup && <UseBackupModal/>}
            {isOpenSendToPacs && <SendToPacsModal/>}

        </div>
    );
};

export default StudyList;
