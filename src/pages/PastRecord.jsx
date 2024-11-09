import React from "react";
import Sidebar from "../components/sidebar";
import DataRecord from "../components/PastRec/CompleteTable";
const PastRecord = () => {
  return(
  <div className=' h-screen'>
  <Sidebar /> 
  <div className='w-full md:pl-60 md:pt-20 md:pr-8 p-3 bg-theme-color h-full '>
  <DataRecord/>
  </div>
</div>
  )
} 

export default PastRecord;