import React, { useState } from "react";
import api from "../api.js";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const [userId, setUserId] = useState("");

  const [loadingOtp, setLoadingOtp] = useState(false);
  const [loadingVerify, setLoadingVerify] = useState(false);

  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const handleGetOTP = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    setLoadingOtp(true);

    try {
      const res = await api.post("/api/auth/login", { email });

      if (res.data.success) {
        setUserId(res.data.userId);
        setShowOtpField(true);
        alert("OTP sent to your email");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Error sending OTP");
    }

    setLoadingOtp(false);
  };

  const handleVerifyOTP = async () => {
    if (!otp) {
      alert("Please enter OTP");
      return;
    }

    setLoadingVerify(true);

    try {
      const res = await api.post("/api/auth/verify-otp", { email, otp });

      if (res.data.success) {
        loginUser(res.data.user, res.data.token);
        alert("Login successful!");
        navigate("/");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Invalid OTP");
    }

    setLoadingVerify(false);
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side */}
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
            <label className="block text-gray-700 mb-2 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter your email"
            />
          </div>

          {!showOtpField ? (
            <button
              onClick={handleGetOTP}
              disabled={loadingOtp}
              className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg 
              hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:scale-105 disabled:bg-blue-300"
            >
              {loadingOtp ? "Sending OTP..." : "Get OTP"}
            </button>
          ) : (
            <>
              {/* OTP Input */}
              <div className="mb-6 mt-4">
                <label className="block text-gray-700 mb-2 font-medium">
                  Enter OTP
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Enter OTP"
                />
              </div>

              <button
                onClick={handleVerifyOTP}
                disabled={loadingVerify}
                className="w-full bg-green-600 text-white font-semibold py-3 px-4 rounded-lg 
                hover:bg-green-700 transition shadow-lg hover:shadow-xl transform hover:scale-105 disabled:bg-green-300"
              >
                {loadingVerify ? "Verifying..." : "Verify OTP"}
              </button>
            </>
          )}

          <p className="mt-6 text-center text-gray-700 text-sm">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline font-medium">
              Register
            </a>
          </p>
        </div>
      </div>

      {/* Right Side */}
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
