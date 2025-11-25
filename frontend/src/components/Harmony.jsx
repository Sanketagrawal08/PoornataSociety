import React from 'react';
import { Users, GraduationCap, Heart } from 'lucide-react';

export default function Harmony() {
  const cards = [
    {
      icon: Users,
      title: "Community Development",
      description: "Building stronger communities through collaborative initiatives and inclusive programs that bring people together."
    },
    {
      icon: GraduationCap,
      title: "Youth Empowerment",
      description: "Providing young individuals with skills, knowledge, and opportunities to become responsible citizens and leaders."
    },
    {
      icon: Heart,
      title: "Social Welfare",
      description: "Supporting vulnerable populations with essential services and creating pathways to sustainable livelihoods."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-green-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-500 to-green-600 bg-clip-text text-transparent">
            Our Ways to Creating Harmony
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            We believe in a holistic approach to social welfare, addressing multiple aspects of community life to create lasting positive change.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Icon Container */}
                <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-orange-500" strokeWidth={2} />
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {card.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}