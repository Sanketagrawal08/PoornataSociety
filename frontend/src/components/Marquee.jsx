import React from "react";
import "../index.css"; // for marquee animation
import { HandshakeIcon } from "lucide-react";

export default function Marquee() {
  return (
    <div className="absolute top-0 left-0 right-0 z-[999]
                    bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600
                    shadow-lg overflow-hidden">

      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r
                      from-transparent via-white/20 to-transparent
                      animate-pulse pointer-events-none"></div>

      {/* MARQUEE LINE */}
      <div className="relative py-3 md:py-4">
        <div className="flex animate-marquee">

          {/* COPY 1 */}
          <div className="flex items-center gap-8 whitespace-nowrap px-8">
            <span className="text-white text-lg md:text-xl font-semibold flex items-center gap-3">
              <span className="text-2xl">🚀</span>
              Empowering young individuals
            </span>
            <span className="text-white/80 text-2xl">•</span>

            <span className="text-white text-lg md:text-xl font-semibold flex items-center gap-3">
              <span className="text-2xl">🌟</span>
              Building responsible citizens
            </span>
            <span className="text-white/80 text-2xl">•</span>

            <span className="text-white text-lg md:text-xl font-semibold flex items-center gap-3">
              <span className="text-2xl">🤝</span>
              Creating harmony across communities
            </span>
            <span className="text-white/80 text-2xl">•</span>

            <span className="text-white text-lg md:text-xl font-semibold flex items-center gap-3">
              <span className="text-2xl">💫</span>
              Join Poornata Foundation today!
            </span>
             <button className="text-white bg-orange-600 py-1 px-2 rounded-xl text-lg md:text-xl font-semibold flex items-center gap-3">
              <HandshakeIcon /> Join Now
            </button>
            <span className="text-white/80 text-2xl">•</span>
          </div>

          {/* COPY 2 */}
          <div className="flex items-center gap-8 whitespace-nowrap px-8">
            <span className="text-white text-lg md:text-xl font-semibold flex items-center gap-3">
              <span className="text-2xl">🚀</span>
              Empowering young individuals
            </span>
            <span className="text-white/80 text-2xl">•</span>

            <span className="text-white text-lg md:text-xl font-semibold flex items-center gap-3">
              <span className="text-2xl">🌟</span>
              Building responsible citizens
            </span>
            <span className="text-white/80 text-2xl">•</span>

            <span className="text-white text-lg md:text-xl font-semibold flex items-center gap-3">
              <span className="text-2xl">🤝</span>
              Creating harmony across communities
            </span>
            <span className="text-white/80 text-2xl">•</span>

            <span className="text-white text-lg md:text-xl font-semibold flex items-center gap-3">
              <span className="text-2xl">💫</span>
              Join Poornata Foundation today!
            </span>
            <span className="text-white/80 text-2xl">•</span>
          </div>

        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1
                      bg-gradient-to-r from-orange-600 via-orange-700 to-orange-600"></div>
    </div>
  );
}
