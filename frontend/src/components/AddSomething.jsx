import React, { useState } from "react";
import api from "../api"; // axios instance

const AddSomething = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [category, setCategory] = useState("");
    const [message, setMessage] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !message || !category) {
            alert("Please fill all required ");
            return;
        }

        try {
            const res = await api.post("/api/help/add", {
                name,
                email,
                category,
                message,
                location,
            });

            if (res.data.success) {
                alert("Your help request has been submitted!");
                setName("");
                setEmail("");
                setCategory("");
                setMessage("");
                setLocation("");
            }
        } catch (err) {
            alert("Error submitting request");
        }
    };

    return (
        <div className="min-h-screen bg-[#FFF8F0] flex justify-center items-center py-10 px-4">
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-2xl">
                <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    Need Help? Submit Your Request
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                            Category (Education, Job, Health, etc.)
                        </label>
                        <input
                            type="text"
                            placeholder="Enter category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                            Location (City / Village)
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your area"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                            Explain Your Problem / Requirement
                        </label>
                        <textarea
                            placeholder="Describe what help you need..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={6}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
                        ></textarea>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700"
                    >
                        Submit Request
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddSomething;
