import React from "react";
import { ArrowRight, BarChart3, Circle } from "lucide-react";
import hindilogo from "../img/hindilogo.png";
import { useNavigate } from "react-router-dom";
import programs from "../data/programs";

const ProgramsAndInitiatives = () => {
  const navigate = useNavigate();

  return (
    <div className="relative mb-12 bg-orange-50">
      <div className="relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500 rounded-full mb-6 shadow-lg">
            <BarChart3 className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-5xl font-bold mb-8 text-black">
            Our Programs & Initiatives
          </h1>

          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Creating opportunities through education, skills, resources, and
            empowerment.
          </p>

          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mt-2"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 p-12">
          {programs.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="relative rounded-xl shadow-lg border border-orange-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-contain bg-center"
                  style={{
                    backgroundImage: `url(${item.backgroundImageForCard})`,
                  }}
                ></div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>

                {/* Content */}
                <div className="relative p-7 text-white">
                  <div className="flex text-center items-start gap-4 mb-3">
                    {/* Icon */}
                    {/* <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md">
                      <Icon className="w-8 h-8 text-white" />
                    </div> */}

                    {/* Title */}
                    <div className="mx-auto">
                      <h3 className="text-2xl text-center font-bold pt-2 pb-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="leading-relaxed mb-2 text-white/90">
                    • {item.shortDescription}
                  </p>

                  {/* Card Description */}
                  <p className="leading-relaxed mb-4 text-white/90">
                    • {item.cardDescription}
                  </p>

                  {/* View More Button */}
                  <button
                    onClick={() => navigate(`/programs/${item.slug}`)}
                    className="mt-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl font-semibold
                 flex items-center gap-2 hover:bg-white/30 transition"
                  >
                    View More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgramsAndInitiatives;
