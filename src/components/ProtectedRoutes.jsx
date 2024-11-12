// components/ProtectedRoutes.js
import React from "react";
import { Navigate } from "react-router-dom";

// Function to retrieve user_id from localStorage
const getUserId = () => {
  const userId = localStorage.getItem("user_id");
  return userId ? parseInt(userId) : null; // Return null if user_id is not found
};

// ProtectedRoute Component
const ProtectedRoute = ({ children, allowedUserIds }) => {
  const userId = getUserId();

  // If userId is null or not in the allowedUserIds list, redirect to login page
  if (!userId || !allowedUserIds.includes(userId)) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise, render the child components (i.e., the protected page)
  return children;
};

export default ProtectedRoute;
