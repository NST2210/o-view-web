import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {ReactComponent as IcWifi} from '../../assets/svg/icWifi.svg';
import {ReactComponent as IconPlus} from '../../assets/svg/icPlusRounded.svg';
import {ReactComponent as IconTrash} from '../../assets/svg/icTrash.svg';
import {ReactComponent as IconTrash2} from '../../assets/svg/icTrash2.svg';
import {ReactComponent as IconAmbulance} from '../../assets/svg/icAmbulance.svg';
import {ReactComponent as IconHdd} from '../../assets/svg/icHdd.svg';
import {useOpenDeletePatient, useOpenDeleteStudy, useOpenEditPatient, useOpenNewStudy} from '../common/AppStore';

const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const {openNewStudy, closeNewStudy} = useOpenNewStudy();
    const {openDeleteStudy, closeDeleteStudy} = useOpenDeleteStudy();
    const {openEditPatient, closeEditPatient} = useOpenEditPatient();
    const {openDeletePatient, closeDeletePatient} = useOpenDeletePatient();
    return (
        <div className="w-100  position-relative">
            <div className="header position-relative z-1">
                <div className="user-info w-13">
                    <img
                        src="/src/assets/img/logo.png" // Đường dẫn tới icon avatar
                        alt="User Avatar"
                        className="avatar"
                    />
                    <div className="greeting">
                        <span className="hello">Hello,</span>
                        <span className="username">Doctor, ADM..</span>
                    </div>
                </div>
                <div className='d-flex lh-50 w-87'>
                    <div className='d-flex justify-content-space-between w-100'>
                        <nav className="nav-links">
                            <Link to="/work-list" className={currentPath === '/work-list' ? 'nav-link--selected' : ''}>
                                <span>WORKLIST</span>
                            </Link>
                            <Link to="/study-list"
                                  className={currentPath === '/study-list' ? 'nav-link--selected' : ''}>
                                <span>STUDYLIST</span>
                            </Link>
                            <Link to="/review" className={currentPath === '/review' ? 'nav-link--selected' : ''}>
                                <span>REVIEW</span>
                            </Link>
                        </nav>
                        <div className="right-section">
                            <span className='d-flex gap-1 align-items-center'><IcWifi/>AI SERVICE</span>
                            <span className='d-flex gap-1 align-items-center'><IcWifi/>WORKLIST</span>
                            <span className='d-flex gap-1 align-items-center'><IcWifi/>PACS</span>
                            <div className="hdd-info">
                                <span className='d-flex gap-1 align-items-center'><IconHdd/> HDD</span>
                                <div className="hdd-bar">
                                    <div className="hdd-used" style={{width: '41.7%'}}></div>
                                </div>
                                <span>91GB / 218GB</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            {currentPath == "/study-list" && <div className="left-56 position-absolute settings top-0 d-flex row">
                <div className="h-65px z-0"></div>
                <div className="settings d-flex">
                    <button className="restore-btn  d-flex align-items-center align-content-center w-auto gap-1">
                        <IconTrash2 className="icon-trash m-l-20"/>
                        <span className="m-r-20"> RESTORE</span>
                    </button>
                    <button className="edit-btn  d-flex align-items-center align-content-center w-auto gap-1" onClick={() => {
                        openEditPatient()
                    }}>
                        <IconTrash2 className="icon-trash m-l-20"/>
                        <span className="m-r-20"> EDIT</span>
                    </button>
                    <button className="delete-btn d-flex align-items-center align-content-center w-auto gap-1" onClick={() => {
                        openDeletePatient()
                    }}>
                        <IconTrash2 className="icon-trash m-l-20"/>
                        <span className="m-r-20"> DELETE</span>
                    </button>
                </div>
            </div>}
            {currentPath == "/work-list" && <div className="left-12 position-absolute settings top-0 d-flex row w-100">
                <div className="h-60px z-0"></div>
                <div className="work-list-function d-flex">
                    <div className="all-button d-flex position-relative w-340px">
                        <button
                            className="new-study-btn position-absolute d-flex align-items-center align-content-center w-auto gap-1">
                            <IconPlus className="icon-plus m-l-20"/>
                            <span className="m-r-20" onClick={() => {
                                openNewStudy()
                            }}>NEW STUDY</span></button>
                        <button
                            className="delete-study-btn left-134px position-absolute d-flex align-items-center align-content-center w-auto gap-1">
                            <IconTrash
                                className="icon-trash m-l-20"/><span className="m-r-20" onClick={() => {
                            openDeleteStudy()
                        }}> DELETE STUDY</span>
                        </button>
                        <button
                            className="emergency-btn left-278px position-absolute d-flex align-items-center align-content-center w-auto gap-1">
                            <IconAmbulance
                                className="icon-trash m-l-20"/><span className="m-r-20">EMERGENCY</span></button>
                    </div>
                    <div className="left-75 loading-bar position-absolute text-white">Worklist stanby</div>
                </div>
            </div>}

        </div>
    );
};
export default Header;