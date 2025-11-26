import { Briefcase, GraduationCap, HandFist, Heart, TrendingUp } from 'lucide-react';
import React from 'react'

const WaysToHelpYouth = () => {
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
    <div className="mb-12">
          <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500 rounded-full mb-6 shadow-lg">
            <HandFist className="w-10 h-10 text-white" />
          </div>
           <h1 className="text-5xl md:text-5xl font-bold mb-8 text-black ">
            Our Ways to Help The Youth
          </h1>
           <p className="text-lg md:text-md text-gray-600 max-w-4xl mx-auto">
            Empowering the next generation through multiple pathways
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full  mt-2"></div>
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

      
  )
}

export default WaysToHelpYouth