import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Record from "./pages/Record"
import Login from "./pages/login"
import PastRecord from "./pages/PastRecord";
const RoutesComponent = () => {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path= "/record" element={<Record />} />
        <Route path= "/pastrec" element={<PastRecord/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;