import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGetOTP = async () => {
    const { name, email, phoneNo } = formData;

    if (!name || !email) {
      alert("Name and Email are required.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone: phoneNo, // backend expects "phone"
        }),
      });

      const data = await res.json();
      setLoading(false);

      if (!data.success) {
        alert(data.message);
        return;
      }

      // STORE email for verify OTP page
      localStorage.setItem("registerEmail", email);

      alert("OTP Sent! Please verify your email.");

      // Redirect user to OTP page
      window.location.href = "/verify-otp";

    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br bg-white">

      {/* Left Logo */}
      <div className="hidden md:flex md:w-1/2 justify-center items-center bg-white">
        <img
          src="/src/img/poornata logo.png"
          className="w-2/3 h-auto opacity-90"
          alt="Logo"
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-12">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
            Register
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Create your account to get started
          </p>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">
              Phone Number <span className="text-gray-400 text-sm">(Optional)</span>
            </label>
            <input
              type="tel"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter your phone number"
            />
          </div>

          <button
            onClick={handleGetOTP}
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:bg-blue-300"
          >
            {loading ? "Sending OTP..." : "Get OTP"}
          </button>

          <p className="mt-6 text-center text-gray-700 text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline font-medium">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
