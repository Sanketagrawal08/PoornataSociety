import React from 'react';
import herr from "../img/herr.jpg";
import { User } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      
      {/* Register Button (Top Right Corner) */}
      <button className="absolute top-6 right-6 z-20 flex items-center gap-2 px-5 py-2 border-2 border-white rounded-lg text-white font-semibold hover:bg-white hover:text-gray-900 transition-all">
        <User className="w-5 h-5" />
        Register
      </button>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 brightness-75"
        style={{
          backgroundImage: `url(${herr})`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          Empowering Youth to Build Their Future
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 mb-10 leading-relaxed">
          Poornata Society provides career guidance, job training, and business development support 
          to help young people achieve their dreams.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg text-lg shadow-md hover:shadow-xl transition-all">
            Donate Now
          </button>
          <button className="px-8 py-3 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
            Learn More
          </button>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
