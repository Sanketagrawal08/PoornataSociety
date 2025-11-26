import React, { Children } from "react";
import { Heart, Users, Briefcase, GraduationCap, TrendingUp, EyeOff, Eye, CloudHail, Globe2, HeartHandshakeIcon, HandFist } from "lucide-react";
import WaysToHelpYouth from "./WaysToHelpYouth";
const Motive = () => {


  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-50">
      
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500 rounded-full mb-6 shadow-lg">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Poornata Social Welfare Foundation
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

{/* Our Vison Section */}
         <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border border-orange-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-white"/>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed">
           <span className="font-semibold text-gray-500 leading-relaxed"> A society where every person regardless of background has the support, skills, and values to thrive professionally and personally</span>
          </p>
        </div>


        {/* Our Motive Section */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border border-orange-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Our Motive</h2>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            As <span className="font-semibold text-orange-600">Poornata Social Welfare Foundation</span>, 
            we believe that small steps towards a good cause in your life lead to fulfillment (Poornata). 
            As an NGO, our purpose is to educate youth based on their backgrounds, enhance their skills, 
            provide platforms to monetize their efforts, and enable them to be self-dependent while 
            helping to form highly valuable societies.
          </p>
        </div>

        {/* Our Ways Section */}
        <WaysToHelpYouth />


      </div>
    </div>
  );
};

export default Motive;



