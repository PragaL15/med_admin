import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImage from "../../public/login1.png"; // Correct image import

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // To manage loading state
  const navigate = useNavigate();

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

    setError(""); // Clear any previous errors
    setLoading(true); // Start loading

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      setLoading(false); // End loading

      if (response.ok && data.status) {
        // Store token, role, and user_id in localStorage
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("role", data.role);
        localStorage.setItem("user_id", data.user_id);

        console.log("Login successful:", data);

        // Redirect based on user_id
        if (data.user_id === 1) {
          navigate("/dashboard");
        } else if (data.user_id === 2) {
          navigate("/AppointmentBooking");
        } else {
          navigate("/");
        }
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoading(false); 
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-custom-blue">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
     
        <div className="flex justify-center mb-6">
          <img src={LoginImage} alt="Login" className="w-32 h-32 object-cover" />
        </div>

        <h2 className="text-2xl font-bold text-center">Login</h2>
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
            className={`w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
