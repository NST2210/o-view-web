import React from 'react';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Search</h3>
      <div className="filter">
        <label>Select Status</label>
        <div className="toggle">
          <button className="active">Scheduled</button>
          <button>In Progress</button>
        </div>
      </div>
      <div className="filter">
        <label>Modality</label>
        <div className="modality-options">
          <input type="checkbox" id="all" /> <label htmlFor="all">All</label>
          <input type="checkbox" id="dx" /> <label htmlFor="dx">DX</label>
          <input type="checkbox" id="cr" /> <label htmlFor="cr">CR</label>
        </div>
      </div>
      <div className="filter">
        <label>Scheduled Date</label>
        <input type="date" />
        <input type="date" />
      </div>
      <div className="filter">
        <label>Birth Date</label>
        <input type="date" />
        <input type="date" />
      </div>
      <div className="search-keyword">
        <input type="text" placeholder="Insert Keyword" />
        <div className="btn-group">
          <button className="today">TODAY</button>
          <button className="week">WEEK</button>
        </div>
      </div>
    </div>
  );
};
