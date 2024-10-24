import React from 'react';

export const PatientTable = () => {
  return (
    <div className="patient-table-container">
      <table className="patient-table">
        <thead>
          <tr>
            <th>NO.</th>
            <th>ACC. NO.</th>
            <th>Patient ID</th>
            <th>Patient Name</th>
            <th>Birthday</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Status</th>
            <th>R Physician</th>
            <th>Study Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>ACC001</td>
            <td>PAT123</td>
            <td>John Doe</td>
            <td>1980-01-01</td>
            <td>43</td>
            <td>M</td>
            <td>Scheduled</td>
            <td>Dr. Smith</td>
            <td>CT Scan</td>
          </tr>
        </tbody>
      </table>
      <div className="pagination">
        <button className="page-prev">&lt;</button>
        <span className="page-number">1</span>
        <button className="page-next">&gt;</button>
      </div>
    </div>
  );
};
