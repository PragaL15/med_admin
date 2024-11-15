import React from "react";
import { Navigate } from "react-router-dom";

// Function to retrieve user_id from localStorage
const getUserId = () => {
  const userId = localStorage.getItem("user_id");
  return userId ? parseInt(userId) : null; 
};

const ProtectedRoute = ({ children, allowedUserIds }) => {
  const userId = getUserId();
  if (!userId || !allowedUserIds.includes(userId)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
