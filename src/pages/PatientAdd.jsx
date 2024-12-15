import React from 'react';
import Sidebar from '../components/sidebar';
import PatientAdd from '../components/AddPatient/AddPatients'
import TopBar from '../components/topNav';
const AddPatients = () => {
  return (
        <div className='h-screen'>
          <TopBar/>
        <Sidebar /> 
        <div className='md:flex md:ml-9 md:pl-60 md:pt-10 p-3 bg-grey h-full mt-8 mb-5 '>
          <PatientAdd/>
        </div>     
   </div>
  );
}

export default AddPatients;