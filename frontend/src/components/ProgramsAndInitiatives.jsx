import { BookOpen, Users, Wrench, FolderKanban, Handshake, Store, BarChart3, Sparkles, Briefcase } from "lucide-react";
import React from "react";

const ProgramsAndInitiatives = () => {

  const items = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Affordable Education",
      description: "Providing learning opportunities and essential resources at accessible costs.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mentorship & Guidance",
      description: "Connecting individuals with mentors for career, personal, and academic support.",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Skill Development Workshops",
      description: "Hands-on training programs to help individuals grow professionally.",
    },
    {
      icon: <FolderKanban className="w-6 h-6" />,
      title: "Resource Access",
      description: "Providing career kits, digital tools, and essential materials.",
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Community Engagement Projects",
      description: "Encouraging people to participate in meaningful social development activities.",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Business Support",
      description: "Guidance and help for youth and families to start or grow small businesses.",
    },
    {
      icon: <Store className="w-6 h-6" />,
      title: "Market Access",
      description: "Providing platforms and support for selling products and services.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Nurture Self-Completeness",
      description: "Helping individuals become self-reliant with confidence-building programs.",
    },
  ];

  return (
    <div className="mb-12  bg-linear-to-br from-orange-50 via-white to-orange-50">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500 rounded-full mb-6 shadow-lg">
          <BarChart3 className="w-10 h-10 text-white" />
        </div>

        <h1 className="text-5xl md:text-5xl font-bold mb-8 text-black">
          Our Programs & Initiatives
        </h1>

        <p className="text-lg md:text-md text-gray-600 max-w-4xl mx-auto">
          Creating opportunities through education, skills, resources, and empowerment.
        </p>

        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mt-2"></div>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-8 p-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 border border-orange-100 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <div className="text-white">{item.icon}</div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramsAndInitiatives;
