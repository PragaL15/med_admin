import React from "react";
import Sidebar from "../components/sidebar";
import PatientCard from '../components/PatientCard'
const Record = () => {
return (
        <div className=' h-screen'>
        <Sidebar /> 
        <div className='w-full md:pl-60 md:pt-20 md:pr-8 p-3 bg-theme-color h-full '>
        <PatientCard/>
        </div>
      </div>
)
}
export default Record;