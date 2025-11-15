import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");

  const handleGetOTP = () => {
    console.log("Email:", email);
    // Send OTP to email
  };

  return (
    <div className="flex min-h-screen bg-white">
      
      {/* Left Side - Login Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-12">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
            Login
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Sign in using your registered email
          </p>

          {/* Email Field */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Get OTP Button */}
          <button
            onClick={handleGetOTP}
            className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg 
            hover:bg-blue-700 transition duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get OTP
          </button>

          {/* Register Link */}
          <p className="mt-6 text-center text-gray-700 text-sm">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline font-medium">
              Register
            </a>
          </p>
        </div>
      </div>

      {/* Right Side - Logo */}
      <div className="hidden md:flex md:w-1/2 justify-center items-center bg-white">
        <img 
          src="/src/img/poornata logo.png" 
          className="w-2/3 h-auto opacity-90" 
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default Login;
