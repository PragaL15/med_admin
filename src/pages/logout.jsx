import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();  // Clear localStorage when the component mounts
    navigate("/login");    // Redirect to the login page
  }, [navigate]);

  return null; // No UI rendering needed as the user is redirected
};

export default LogoutPage;
