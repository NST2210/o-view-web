import React from 'react';

export const Header = () => {
    return (
        // <div className="header">
        //   <div className="header-left">
        //     <div className="profile-section">
        //       <div className="profile-pic"></div>
        //       <div>
        //         <span className="greeting">Hello,</span>
        //         <span className="doctor-name">Doctor, ADM..</span>
        //       </div>
        //     </div>

        //   </div>
        //   <div className="header-right">
        //   <nav className="menu">
        //       <a href="#">WORKLIST</a>
        //       <a href="#">STUDYLIST</a>
        //       <a href="#">ACQUISITION</a>
        //     </nav>
        //     <div className="actions">
        //       <button className="new-study">+ NEW STUDY</button>
        //       <button className="delete-study"><i className="icon-trash"></i> DELETE STUDY</button>
        //       <button className="emergency"><i className="icon-ambulance"></i> EMERGENCY</button>
        //     </div>
        //     <div className="status-bar">
        //       <span className="status-icon"><i className="icon-hdd"></i> HDD</span>
        //       <div className="storage">
        //         <div className="storage-used" style={{ width: '40%' }}></div>
        //       </div>
        //       <span>90GB / 218GB</span>
        //     </div>
        //   </div>
        // </div>
        <div>
            <header className="header position-relative">
                <div className="user-info">
                    <img
                        src="/path-to-your-avatar-icon.png" // Đường dẫn tới icon avatar
                        alt="User Avatar"
                        className="avatar"
                    />
                    <div className="greeting">
                        <span className="hello">Hello,</span>
                        <span className="username">Doctor, ADM..</span>
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='d-flex'>
                        <nav className="nav-links">
                            <span>WORKLIST</span>
                            <span>STUDYLIST</span>
                            <span>REVIEW</span>
                        </nav>
                        <div className="right-section">
                            <span>AI SERVICE</span>
                            <span>WORKLIST</span>
                            <span>PACS</span>
                            <div className="hdd-info">
                                <span>HDD</span>
                                <div className="hdd-bar">
                                    <div className="hdd-used" style={{ width: '41.7%' }}></div>
                                </div>
                                <span>91GB / 218GB</span>
                            </div>
                        </div>
                    </div>

                </div>

            </header>
            <div className="left-50 m-t-10 position-absolute settings top-10">
                <button className="restore-btn">RESTORE</button>
                <button className="edit-btn">EDIT</button>
                <button className="delete-btn">DELETE</button>
            </div>
        </div>
    );
};
