import { useState } from "react";
import herr from "../img/herr.jpg";
import { Goal, User } from "lucide-react";
import { useNavigate } from "react-router";
import Modal from "./Modal";
import { useAuth } from "../context/AuthContext";
import UserNameAndDetails from "./UserNameAndDetails";
import LogoutModal from "./LogoutModal";
import newlogopoornata from "../img/newlogopoornata.png";
import Marquee from "./Marquee";
import "../index.css";
import poornatalogo from "../img/poornatalogo.png"

export default function Hero() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [logoutOpen, setLogoutOpen] = useState(false);

  const { user, logoutUser } = useAuth();

  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden">

      {/* 🔥 TOP MARQUEE */}
      <Marquee />

      {/* Spacer so content doesn't hide under marquee */}
      <div className="h-[75px] w-full"></div>

      {/* LOGIN / REGISTER BUTTON */}
      {user ? (
        <UserNameAndDetails
          user={user}
          openLogoutModal={() => setLogoutOpen(true)}
        />
      ) : (
        <button
          onClick={() => navigate("/register")}
          className="absolute top-24 right-4 md:right-6 z-20 flex items-center gap-2 px-5 py-2.5 
                     border-2 border-white/80 rounded-full text-white text-sm md:text-base 
                     hover:bg-white hover:text-black transition-all duration-300 
                     backdrop-blur-sm hover:scale-105"
        >
          <User className="w-4 h-4 md:w-5 md:h-5" />
          Register / Login
        </button>
      )}

      {/* 🔥 FULL BACKGROUND LAYER */}
      <div className="absolute inset-0 w-full">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110 animate-slow-zoom"
          style={{ backgroundImage: `url(${herr})` }}
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* MAIN CONTENT WITH FULL-WIDTH BACKGROUND */}
      {/* ---------------------------------------------------------------- */}
      <div className="relative z-10 w-full mt-14 md:py-20 ">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* -------------------------------------------- */}
          {/* LOGO + TITLE (RESPONSIVE FIX) */}
          {/* -------------------------------------------- */}
          <div className="flex flex-col md:flex-row items-center md:items-center gap-4 mb-18 text-center md:text-left">

            <img
              src={poornatalogo}
              alt="Poornata Logo"
              className="w-18 h-18 md:w-28 md:h-28 object-contain drop-shadow-2xl bg-white/85 rounded-full"
            />

            <div className="">
              <h1 className="text-3xl  sm:text-4xl md:text-4xl whitespace-nowrap bg-gradient-to-r from-orange-600 via-orange-200 to-white bg-clip-text text-transparent lg:text-5xl font-bold leading-tight  drop-shadow-1xl">
                Poornata Social Welfare Foundation
              </h1>
              <h3 className="text-lg sm:text-xl md:text-2xl pb-3 text-gray-200 ">
                Nurturing Harmony For All
              </h3>
            </div>

          </div>

          {/* -------------------------------------------- */}
          {/* MISSION CARD */}
          {/* -------------------------------------------- */}
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="bg-white/85 backdrop-blur-md rounded-3xl shadow-2xl 
                            p-5 sm:p-6 md:p-8 border border-gray-200 hover:shadow-3xl 
                            transition-all duration-500 hover:-translate-y-2 
                            hover:border-[#FF6900]/30">

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-4">
                <div className="bg-gradient-to-br from-[#FF6900] to-[#ff8534] 
                                rounded-2xl p-3 sm:p-4 shadow-xl">
                  <Goal className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.5} />
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-1 sm:mb-2">
                    Our Mission
                  </h2>
                  <div className="h-1.5 w-24 sm:w-32 bg-gradient-to-r from-[#FF6900] to-orange-400 rounded-full mx-auto sm:mx-0" />
                </div>
              </div>

              <p className="text-base sm:text-lg md:text-lg text-gray-700 leading-relaxed text-center sm:text-left">
                To <span className="font-semibold text-[#FF6900]">empower young individuals </span>
                and responsible citizens by offering essential resources and guidance <br />—
                accelerating their <span className="font-semibold text-[#FF6900]">professional growth </span>
                and shaping a <span className="font-semibold text-[#FF6900]">meaningful journey </span>.
              </p>

            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      {/* MODALS */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
      <LogoutModal
        open={logoutOpen}
        onClose={() => setLogoutOpen(false)}
        onConfirm={() => {
          logoutUser();
          setLogoutOpen(false);
        }}
      />

    </section>
  );
}
