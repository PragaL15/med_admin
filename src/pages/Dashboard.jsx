import React from 'react';
import Sidebar from '../components/sidebar';
import DBCard from '../components/Dashboard/urgent';
import Operation from '../components/Dashboard/operation'
import NoPatients from '../components/Dashboard/CurrentPat'
import Appoinment from '../components/Dashboard/appoinment'
import PatientRecoveryGraph from '../components/Dashboard/graph';
import TopBar from '../components/topNav';
const Dashboard = () => {
  return (
    <> 
        <div className='h-screen'>
          <TopBar/>
        <Sidebar /> 
        <div className='md:flex md:ml-9 md:pl-60 md:pt-10 p-3 bg-custom-blue h-full '>
          <div className='inline'>
            <div className='flex'>
          <DBCard/>
          <Operation/>
          <NoPatients/>
          </div>
          <PatientRecoveryGraph/>
          </div>

          <div className='inline'>
          <Appoinment/>
          </div>

          </div>
        </div>     
    </>
  );
}

export default Dashboard;