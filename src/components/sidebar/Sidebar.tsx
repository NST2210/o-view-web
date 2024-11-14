import React, { useState } from 'react';
import { ReactComponent as IcSearch } from '../../assets/svg/icSearch.svg';
import { ReactComponent as IcArrowDown } from '../../assets/svg/icDownArrow.svg';
import { ReactComponent as IcCheck } from '../../assets/svg/ic_check.svg';
import ToggleSwitch from '../toggleSwicth/ToggleSwicth';
import { ReactComponent as CalendarIcon } from '../../../src/assets/svg/ic_calendar.svg';

const Sidebar = () => {
    const [status, setStatus] = useState('Scheduled');
    const [modality, setModality] = useState([]);
    const [scheduledDate, setScheduledDate] = useState({ from: '', to: '' });
    const [birthDate, setBirthDate] = useState({ from: '', to: '' });

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
    };

    const toggleModality = (option) => {
        setModality((prev) =>
            prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
        );
    };

    return (
        <div className="sidebar">
            <div className="search-container">
                <div className="title-search">Search</div>
            </div>

            {/* Select Status */}
            <div className="filter-section">
                <div className="d-flex w-100 justify-content-space-between m-b-16">
                    <label className="align-items-center d-flex"><IcArrowDown className="m-r-10" />Select Status</label>
                    <ToggleSwitch Name="selectStatus" />
                </div>
                <div className="toggle d-flex m-b-20">
                    <button onClick={() => handleStatusChange('Scheduled')}
                            className={status === 'Scheduled' ? 'active' : ''}>
                        {status === 'Scheduled' && <IcCheck width={16} height={16} className="mr-5" />}
                        Scheduled
                    </button>
                    <button onClick={() => handleStatusChange('In Progress')}
                            className={status === 'In Progress' ? 'active' : ''}>
                        {status === 'In Progress' && <IcCheck width={16} height={16} className="mr-5" />}
                        In Progress
                    </button>
                </div>
            </div>

            {/* Modality */}
            <div className="filter-section">
                <div className="d-flex w-100 justify-content-space-between m-b-16">
                    <label className="align-items-center d-flex"><IcArrowDown className="m-r-10" />Modality</label>
                    <ToggleSwitch Name="modality" />
                </div>
                <div className="checkbox-group d-flex justify-content-space-between">
                    {['All', 'DX', 'CR'].map((option) => (
                        <label key={option}>
                            <input
                                type="checkbox"
                                checked={modality.includes(option)}
                                onChange={() => toggleModality(option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            </div>

            {/* Scheduled Date */}
            <div className="filter-section">
                <div className="d-flex w-100 justify-content-space-between m-b-16">
                    <label className="align-items-center d-flex"><IcArrowDown className="m-r-10" />Scheduled
                        Date</label>
                    <ToggleSwitch Name="scheduledDate" />
                </div>
                <div className="date-range">
                    <div className="date-range__wrapper">
                        <CalendarIcon className="calendar-icon" />
                        <input
                            className="date-range__input"
                            type="date"
                            value={scheduledDate.from}
                            onChange={(e) => setScheduledDate({ ...scheduledDate, from: e.target.value })}
                        />
                    </div>
                    <span className="date-range__separator">~</span>
                    <div className="date-range__wrapper">
                        <CalendarIcon className="calendar-icon" />
                        <input
                            className="date-range__input"
                            type="date"
                            value={scheduledDate.to}
                            onChange={(e) => setScheduledDate({ ...scheduledDate, to: e.target.value })}
                        />
                    </div>
                </div>
            </div>

            {/* Birth Date */}
            <div className="filter-section">
                <div className="d-flex w-100 justify-content-space-between m-b-16">
                    <label className="align-items-center d-flex"><IcArrowDown className="m-r-10" />Birth Date</label>
                    <ToggleSwitch Name="birthDate" />
                </div>
                <div className="date-range">
                    <div className="date-range__wrapper">
                        <CalendarIcon className="calendar-icon" />
                        <input
                            className="date-range__input"
                            type="date"
                            value={birthDate.from}
                            onChange={(e) => setBirthDate({ ...birthDate, from: e.target.value })}
                        />
                    </div>
                    <span className="date-range__separator">~</span>
                    <div className="date-range__wrapper">
                        <CalendarIcon className="calendar-icon" />
                        <input
                            className="date-range__input"
                            type="date"
                            value={birthDate.to}
                            onChange={(e) => setBirthDate({ ...birthDate, to: e.target.value })}
                        />
                    </div>
                </div>


                {/* Search Bar */}
                <div className="search-input">
                    <div className="search-bar">
                        <select>
                            <option value="all">ALL</option>
                            {/* Add other options here */}
                        </select>
                        <input type="text" placeholder="Insert Keyword" />
                        <button><IcSearch /></button>
                    </div>
                    <div className="top-right"></div>
                    <div className="bottom-left"></div>
                </div>


                {/* Action Buttons */}
                <div className="action-buttons">
                    <button className="today-btn">Today</button>
                    <button className="week-btn">Week</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
