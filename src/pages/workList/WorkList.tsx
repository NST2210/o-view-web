import React, {useContext, useEffect, useState} from 'react';

import Sidebar from '../../components/sidebar/Sidebar';
import NewStudyModal from '../../components/modal/newStudyModal/NewStudyModal';
import { useOpenDeleteStudy, useOpenNewStudy } from '../../components/common/AppStore';
import TableCustom from '../../components/tableCustom/TableCustom';
import DeleteStudyModal from '../../components/modal/deleteStudyModal/DeleteStudyModal';
import {AppContext} from "../../components/common/AppContext";

const WorkList = () => {

    const {isOpenNewStudy} = useOpenNewStudy();
    const {isOpenDeleteStudy} = useOpenDeleteStudy();

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const rowsPerPage = 15;
    const columns = [
        {title: 'ACC. NO.', key: 'accNo'},
        {title: 'Patient ID', key: 'patientId'},
        {title: 'Patient Name', key: 'patientName'},
        {title: 'Birthday', key: 'birthday'},
        {title: 'Age', key: 'age'},
        {title: 'Sex', key: 'sex'},
        {title: 'Status', key: 'status'},
        {title: 'R Physician', key: 'rPhysician'},
        {title: 'Study Description', key: 'studyDescription'},
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
    const fetchData = async (page: any, rowsPerPage: any) => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        // Giả sử response trả về có dạng: { items: [...], total: ... }
        setData(rawListdata.slice(start, end));
        setTotalItems(rawListdata.length);
    };

    // Gọi fetchData khi page thay đổi
    useEffect(() => {
        fetchData(page, rowsPerPage);
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

    return (
        <div className="work-list">

            <div className="main-content">
                <Sidebar/>
                <div className="work-list-table-container">
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
                        onClickRow={handleClickRowPatient}
                    />
                </div>

            </div>
            {isOpenNewStudy && <NewStudyModal isEdit={false} data={undefined}/>}
            {isOpenDeleteStudy && <DeleteStudyModal />}
        </div>
    );
};
export default WorkList;
