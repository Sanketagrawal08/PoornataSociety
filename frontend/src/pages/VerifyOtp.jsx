import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import api from "../api"; // Axios instance with baseURL

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Load email saved at register step
  useEffect(() => {
    const storedEmail = localStorage.getItem("registerEmail");
    if (!storedEmail) {
      alert("No email found! Please register again.");
      window.location.href = "/register";
      return;
    }
    setEmail(storedEmail);
  }, []);

 const handleVerify = async () => {
  if (!otp) {
    alert("Please enter OTP");
    return;
  }

  setLoading(true);

  try {
    const response = await api.post("/api/auth/verify-otp", {
      email,
      otp,
    });

    const data = response.data;
    setLoading(false);

    if (!data.success) {
      alert(data.message);
      return;
    }

    if (data.token) {
      localStorage.setItem("authToken", data.token);
    }

    alert("OTP Verified Successfully!");
    localStorage.removeItem("registerEmail");
    navigate("/");

  } catch (error) {
    console.error(error);
    setLoading(false);
    alert("Something went wrong!");
  }
};


  return (
    <div className="flex min-h-screen bg-gray-100 justify-center items-center p-4">
      <div className="bg-white shadow-xl p-8 rounded-2xl w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Verify OTP
        </h2>

        <p className="text-center text-gray-500 mb-4">
          OTP sent to: <span className="font-medium">{email}</span>
        </p>

        <div className="mb-6">
          <label className="block mb-2 text-gray-700 font-medium">
            Enter OTP
          </label>
          <input
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter 6-digit OTP"
          />
        </div>

        <button
          onClick={handleVerify}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md disabled:bg-blue-300"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

        <p className="mt-4 text-center text-gray-600 text-sm">
          Didn’t receive the OTP?{" "}
          <a
            href="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Try login again
          </a>
        </p>
      </div>
    </div>
  );
};

export default VerifyOtp;
