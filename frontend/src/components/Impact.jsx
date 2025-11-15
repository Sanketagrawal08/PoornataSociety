import React from "react";
import { Sparkles, Radio, Coffee, Building2, Store, ChefHat, Briefcase, Monitor } from "lucide-react";

const Impact = () => {
  const initiatives = [
    {
      icon: <Radio className="w-8 h-8" />,
      image: "https://id-preview--9392b8e9-e3df-443f-b3b1-1f9926a5b1d6.lovable.app/assets/activity-1-IawE2d_D.jpg",
      title: "LTE Wireless Testing Training",
      description: "Professional training sessions to enhance technical skills in wireless technology",
      color: "from-blue-500 to-blue-600"
    },
    
    {
      icon: <Building2 className="w-8 h-8" />,
      image: "https://id-preview--9392b8e9-e3df-443f-b3b1-1f9926a5b1d6.lovable.app/assets/activity-1-IawE2d_D.jpg",
      title: "Post Office Work Training",
      description: "Training program for postal services and administrative work",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Store className="w-8 h-8" />,
      image: "https://id-preview--9392b8e9-e3df-443f-b3b1-1f9926a5b1d6.lovable.app/assets/activity-1-IawE2d_D.jpg",
      title: "Small Shop Establishment",
      description: "Helped to set up a small shop to help 2 youth become self-dependent",
      color: "from-purple-500 to-purple-600"
    },
   {
  icon: <Monitor className="w-8 h-8" />, // or <Globe /> / <BarChart3 /> if you prefer
  image: "https://img.freepik.com/premium-photo/digital-marketing-concept-social-media-business-technology-background_161452-1745.jpg",
  title: "Digital Marketing Services",
  description: "Helping NGOs and businesses grow their online presence through SEO, social media, and content marketing strategies.",
  color: "from-blue-500 to-indigo-600"
},

    {
      icon: <Briefcase className="w-8 h-8" />,
      image: "https://id-preview--9392b8e9-e3df-443f-b3b1-1f9926a5b1d6.lovable.app/assets/activity-1-IawE2d_D.jpg",
      title: "Youth Business Support",
      description: "Helping youths to arrange and setup business activities to make them earn",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-6 shadow-lg">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Impact</h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how we're making a difference in the lives of young people through
            our various initiatives and programs
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-orange-100"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {initiative.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {initiative.description}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className={`h-1 bg-gradient-to-r ${initiative.color}`}></div>
            </div>
          ))}
        </div>

      
      </div>
    </div>
  );
};

export default Impact;