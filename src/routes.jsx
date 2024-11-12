// RoutesComponent.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Record from "./pages/Record";
import Login from "./pages/login";
import PastRecord from "./pages/PastRecord";
import AddPatient from "./pages/PatientAdd";
import Logout from "./pages/logout";
import ProtectedRoute from "./components/ProtectedRoutes"; // Import ProtectedRoute component

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />

        {/* Role-Based Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedUserIds={[1, 2]}>  {/* User IDs 1 and 2 can access */}
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/record"
          element={
            <ProtectedRoute allowedUserIds={[1, 2]}>  {/* User IDs 1 and 2 can access */}
              <Record />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pastrec"
          element={
            <ProtectedRoute allowedUserIds={[1, 2]}>  {/* User IDs 1 and 2 can access */}
              <PastRecord />
            </ProtectedRoute>
          }
        />
        <Route
          path="/AddPatient"
          element={
            <ProtectedRoute allowedUserIds={[1]}>  {/* Only User ID 1 (Admin) can access */}
              <AddPatient />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Logout"
          element={
            <ProtectedRoute allowedUserIds={[1, 2]}>  {/* User IDs 1 and 2 can access */}
              <Logout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
