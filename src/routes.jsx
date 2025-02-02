
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Record from "./pages/Record";
import Login from "./pages/login";
import PastRecord from "./pages/PastRecord";
import AddPatient from "./pages/PatientAdd";
import Logout from "./pages/logout";
import AppointMent from "./pages/AppointmentBooking";
import ProtectedRoute from "./components/ProtectedRoutes"; 

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
    
        <Route path="/login" element={<Login />} />

       
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedUserIds={[1]}>  
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/AppointmentBooking"
          element={
            <ProtectedRoute allowedUserIds={[2]}>  
              <AppointMent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/record"
          element={
            <ProtectedRoute allowedUserIds={[1]}>  
              <Record />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pastrec"
          element={
            <ProtectedRoute allowedUserIds={[1, 2]}>  
              <PastRecord />
            </ProtectedRoute>
          }
        />
        <Route
          path="/AddPatient"
          element={
            <ProtectedRoute allowedUserIds={[1]}>  
              <AddPatient />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Logout"
          element={
            <ProtectedRoute allowedUserIds={[1, 2]}> 
              <Logout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
