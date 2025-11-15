import React, { useState } from 'react';
import herr from "../img/herr.jpg";
import { User } from 'lucide-react';
import { useNavigate } from 'react-router';
import Modal from './Modal';

export default function Hero() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Single handler for both Donate Now and Learn More
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">

      {/* Top-right Register button */}
      <button
        onClick={() => navigate("/register")}
        className="absolute top-6 right-6 z-20 flex items-center gap-2 px-5 py-2 border-2 border-white rounded-lg text-white font-semibold hover:bg-white hover:text-gray-900 transition-all"
      >
        <User className="w-5 h-5" />
        Register / Login
      </button>

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 brightness-75"
        style={{ backgroundImage: `url(${herr})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent"></div>
      </div>

      {/* Main text content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          Empowering Youth to Build Their Future
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 mb-10 leading-relaxed">
          Poornata Society provides career guidance, job training, and business development support 
          to help young people achieve their dreams.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 flex-wrap">
          <button
            onClick={handleOpenModal}
            className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg text-lg shadow-md hover:shadow-xl transition-all"
          >
            Donate Now
          </button>

          <button
            onClick={handleOpenModal} // ✅ Learn More also opens modal
            className="px-8 py-3 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"></div>

      {/* ✅ Single Modal Component */}
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </section>
  );
}
