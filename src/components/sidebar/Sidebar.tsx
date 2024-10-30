import React, {useState} from 'react';
import {ReactComponent as IcSearch} from '../../assets/svg/icSearch.svg';
import {ReactComponent as IcArrowDown} from '../../assets/svg/icDownArrow.svg';
import ToggleSwitch from "../toggleSwicth/ToggleSwicth";

const Sidebar = () => {
    const [status, setStatus] = useState('Scheduled');
    const [modality, setModality] = useState([]);
    const [scheduledDate, setScheduledDate] = useState({from: '', to: ''});
    const [birthDate, setBirthDate] = useState({from: '', to: ''});

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
                    <label className="align-items-center d-flex"><IcArrowDown className="m-r-10"/>Select Status</label>
                    <ToggleSwitch Name='selectStatus'/>
                </div>
                <div className="toggle d-flex">
                    <button onClick={() => handleStatusChange('Scheduled')}
                            className={status === 'Scheduled' ? 'active' : ''}>
                        Scheduled
                    </button>
                    <button onClick={() => handleStatusChange('In Progress')}
                            className={status === 'In Progress' ? 'active' : ''}>
                        In Progress
                    </button>
                </div>
            </div>

            {/* Modality */}
            <div className="filter-section">
                <div className="d-flex w-100 justify-content-space-between m-b-16">
                    <label className="align-items-center d-flex"><IcArrowDown className="m-r-10"/>Modality</label>
                    <ToggleSwitch Name='modality'/>
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
                    <label className="align-items-center d-flex"><IcArrowDown className="m-r-10"/>Scheduled Date</label>
                    <ToggleSwitch Name='scheduledDate'/>
                </div>
                <div className="date-range">
                    <input
                        className="date-range__input"
                        type="date"
                        value={scheduledDate.from}
                        onChange={(e) => setScheduledDate({...scheduledDate, from: e.target.value})}
                    />
                    <span className="date-range__separator">~</span>
                    <input
                        className="date-range__input"
                        type="date"
                        value={scheduledDate.to}
                        onChange={(e) => setScheduledDate({...scheduledDate, to: e.target.value})}
                    />
                </div>
            </div>

            {/* Birth Date */}
            <div className="filter-section">
                <div className="d-flex w-100 justify-content-space-between m-b-16">
                    <label className="align-items-center d-flex"><IcArrowDown className="m-r-10"/>Birth Date</label>
                    <ToggleSwitch Name='birthDate'/>
                </div>
                <div className="date-range">
                    <input
                        className="date-range__input"
                        type="date"
                        value={birthDate.from}
                        onChange={(e) => setBirthDate({...birthDate, from: e.target.value})}
                    />
                    <span className="date-range__separator">~</span>
                    <input
                        className="date-range__input"
                        type="date"
                        value={birthDate.to}
                        onChange={(e) => setBirthDate({...birthDate, to: e.target.value})}
                    />
                </div>


                {/* Search Bar */}
                <div className="search-input">
                    <div className="search-bar">
                        <select>
                            <option value="all">ALL</option>
                            {/* Add other options here */}
                        </select>
                        <input type="text" placeholder="Insert Keyword"/>
                        <button><IcSearch size={10}/></button>
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
}

export default Sidebar;
