import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import TopBar from "../components/topNav";
import DataRecord from "../components/PastRec/CompleteTable";

const PastRecord = () => {
  const [token, setToken] = useState(null);


  return (
    <div className="h-screen">
      <Sidebar />
      <TopBar/>
      <div className="w-full md:pl-60 md:pt-20 md:pr-8 p-3 bg-theme-color h-full">
        <DataRecord token={token} />
      </div>
    </div>
  );
};

export default PastRecord;
