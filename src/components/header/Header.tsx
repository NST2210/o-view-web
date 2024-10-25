import React from 'react';

export const Header = () => {
    return (
        <div>
            <header className="header position-relative">
                <div className="user-info">
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
            <div className="left-50 position-absolute settings top-0 d-flex row">
                <div className="h-65px"></div>
                <div className="settings">
                    <button className="restore-btn">RESTORE</button>
                    <button className="edit-btn">EDIT</button>
                    <button className="delete-btn">DELETE</button>
                </div>
            </div>
        </div>
    );
};
