import React from 'react';

import Sidebar from "../../components/sidebar/Sidebar";
import PatientTable from "../../components/patientTable/PatientTable";

const Dashboard = () => {
  return (
    <div className="dashboard">
      
      <div className="main-content">
        <Sidebar />
        <PatientTable />
      </div>
    </div>
  );
};
export default Dashboard;
