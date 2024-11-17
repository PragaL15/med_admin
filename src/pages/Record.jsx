import React from "react";
import Sidebar from "../components/sidebar";
import TopBar from "../components/topNav";
import PatientCard from '../components/Record/PatientCard'
const Record = () => {
return (
        <div className=' h-screen'>
        <Sidebar /> 
        <TopBar/>
        <div className='w-full md:pl-60 md:pt-20 md:pr-8 p-3 bg-pale-blue h-full '>
        <PatientCard/>
        </div>
      </div>
)
}
export default Record;