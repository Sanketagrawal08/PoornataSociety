// src/pages/ProgramDetails.jsx

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import programs from "../data/programs";
import { ArrowLeft } from "lucide-react";

const ProgramDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return <div className="text-center py-20 text-xl">Program not found</div>;
  }

  const Icon = program.icon;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      
    {/* Back Button */}
    <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition font-medium"
    >
        <ArrowLeft className="w-5 h-5" />
        Back
    </button>

    {/* Main Card */}
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 border border-gray-200">

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-lg bg-orange-500 flex items-center justify-center shadow">
            <Icon className="w-7 h-7 text-white" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900">{program.title}</h1>
        </div>

        {/* Small Separator */}
        <div className="h-[2px] w-20 bg-orange-500 rounded-full mb-6"></div>

        {/* Short Description */}
        <p className="text-gray-700 text-lg leading-relaxed mb-2">
          {program.shortDescription}
        </p>

        {/* Long Description */}
        <div className="text-gray-800 whitespace-pre-line text-lg leading-relaxed">
          {program.longDescription}
        </div>

        {/* Donate Button */}
        {program.showDonate && (
          <button className="mt-8 w-full bg-orange-600 text-white py-3 rounded-lg shadow hover:bg-orange-700 transition">
            Donate Now
          </button>
        )}
{/* show joinus */}
         {program.showJoinUs && (
          <button className="mt-8 w-full bg-orange-600 text-white py-3 rounded-lg shadow hover:bg-orange-700 transition">
            Join Us Now
          </button>
        )}
      </div>
    </div>
  );
};

export default ProgramDetails;
