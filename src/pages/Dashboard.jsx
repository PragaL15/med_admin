import React from 'react';
import Sidebar from '../components/sidebar';

const Dashboard = () => {
  return (
    <> 
        <div className='h-screen'>
        <Sidebar /> 
        <div className='w-full md:pl-60 md:pt-20 md:pr-8 p-3 bg-grey h-full '>
        </div>
      </div>
     
    </>
  );
}

export default Dashboard;