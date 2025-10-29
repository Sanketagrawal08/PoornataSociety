import React from "react";
import { Heart, Users, Briefcase, GraduationCap, TrendingUp } from "lucide-react";

const Motive = () => {
  const ways = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Career Counseling",
      description: "Helping students and counseling them to choose suitable career paths"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Skills Training",
      description: "Providing job training and professional development to boost skills"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Business Support",
      description: "Helping youth arrange and setup business activities to generate income"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Future Vision",
      description: "Performing activities to raise funds for establishing schools"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
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
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Ways to Help the Youth</h2>
            <p className="text-gray-600 text-lg">Empowering the next generation through multiple pathways</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ways.map((way, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border border-orange-100 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <div className="text-white">
                      {way.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {way.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {way.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default Motive;