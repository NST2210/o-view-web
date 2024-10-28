import React, {useState} from 'react';
import { ReactComponent as IcSearch} from '../../assets/svg/icSearch.svg';

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
            <h3>Search</h3>

            {/* Select Status */}
            <div className="filter-section">
                <label>Select Status</label>
                <div className="toggle">
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
                <label>Modality</label>
                <div className="checkbox-group">
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
                <label>Scheduled Date</label>
                <div className="date-range">
                    <input
                        type="date"
                        value={scheduledDate.from}
                        onChange={(e) => setScheduledDate({...scheduledDate, from: e.target.value})}
                    />
                    <span>~</span>
                    <input
                        type="date"
                        value={scheduledDate.to}
                        onChange={(e) => setScheduledDate({...scheduledDate, to: e.target.value})}
                    />
                </div>
            </div>

            {/* Birth Date */}
            <div className="filter-section">
                <label>Birth Date</label>
                <div className="date-range">
                    <input
                        type="date"
                        value={birthDate.from}
                        onChange={(e) => setBirthDate({...birthDate, from: e.target.value})}
                    />
                    <span>~</span>
                    <input
                        type="date"
                        value={birthDate.to}
                        onChange={(e) => setBirthDate({...birthDate, to: e.target.value})}
                    />
                </div>
            </div>

            {/* Search Bar */}
            <div className="search-bar">
                <select>
                    <option value="all">ALL</option>
                    {/* Add other options here */}
                </select>
                <input type="text" placeholder="Insert Keyword"/>
                <button><IcSearch size={10}/></button>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
                <button className="today-btn">Today</button>
                <button className="week-btn">Week</button>
            </div>
        </div>
    );
}

export default Sidebar;
