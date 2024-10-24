import React from 'react';
import { Header } from '../../components/header/Header';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { PatientTable } from '../../components/patientTable/PatientTable';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      
      <div className="main-content">
        <Sidebar />
        <PatientTable />
      </div>
    </div>
  );
};
