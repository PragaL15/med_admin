import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LogoutPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const navigate = useNavigate(); // Initialize useNavigate

  // Clear localStorage every time the component is rendered
  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    setError("");

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok && data.status) {
        console.log("Login successful:", data);
        setIsLoggedIn(true); // Set login status to true
        localStorage.setItem("token", data.token); // Save token to localStorage if provided
        navigate("/dashboard"); // Redirect to /dashboard on successful login
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  const handleLogout = () => {
    localStorage.clear(); // Clear localStorage on logout
    setIsLoggedIn(false); // Update login status
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="inline">
        {isLoggedIn ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold">Successfully Logged out of the session!!!</h1>
            <button
              onClick={handleLogout}
              className="mt-4 p-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold text-center mt-3">Login to continue</h2>
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-center">Login</h3>
              {error && <p className="text-red-500 text-center">{error}</p>}
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your username"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                >
                  Login
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LogoutPage;
