import React, { useState } from "react";
import { LogOut, User, Menu } from "lucide-react";

const UserNameAndDetails = ({ user, openLogoutModal }) => {
  const [open, setOpen] = useState(false); // mobile toggle

  return (
    <>
      {/* ===========================
          DESKTOP VIEW (md and up)
      ============================ */}
      <div className="hidden md:block absolute top-20 right-6 z-20">
        <div className="
          bg-gradient-to-br from-[#FA5500]/20 to-[#ff7700]/20 
          backdrop-blur-md 
          border border-[#FA5500]/30 
          rounded-2xl 
          p-4
          shadow-2xl shadow-[#FA5500]/20
        ">
          <div className="flex items-center gap-4">
            
            {/* Avatar */}
            <div className="
              w-12 h-12 rounded-full 
              bg-gradient-to-br from-[#FA5500] to-[#ff8833]
              flex items-center justify-center 
              shadow-lg shadow-[#FA5500]/50
            ">
              <User className="w-6 h-6 text-white" />
            </div>

            {/* Name + Email */}
            <div>
              <h1 className="text-white font-bold text-lg flex items-center gap-1">
                {user.name.split(" ")[0]} <span className="text-xl">👋</span>
              </h1>
              <p className="text-gray-100 text-sm">{user.email}</p>
            </div>

            {/* Logout Button */}
            <button
              onClick={openLogoutModal}
              className="p-2.5 bg-gray-700 hover:bg-red-500/30 
                border border-red-400/30 rounded-xl 
                transition-all duration-200 group hover:scale-105"
            >
              <LogOut className="w-5 h-5 group-hover:text-red-300" />
            </button>
          </div>
        </div>
      </div>

      {/* ===========================
          MOBILE VIEW (below md)
      ============================ */}
      <div className="md:hidden absolute top-24 right-4 z-30">

        {/* Hamburger ALWAYS stays in place */}
        <button
          onClick={() => setOpen(!open)}
          className="p-3 rounded-xl bg-white/20 backdrop-blur-md 
                     border border-white/30 shadow-xl 
                     hover:bg-white/30 transition active:scale-95"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>

        {/* Dropdown positioned ABSOLUTE so it DOES NOT push hamburger */}
        <div className="relative">
          {open && (
            <div className="
              absolute right-0 mt-3
              w-[85vw]
              bg-gradient-to-br from-[#FA5500]/25 to-[#ff7700]/25
              backdrop-blur-xl
              border border-[#FA5500]/30 
              rounded-2xl 
              shadow-xl p-4
              animate-fade-in-up
            ">
              {/* Avatar + Name */}
              <div className="flex items-center gap-3 mb-3">
                <div className="
                  w-10 h-10 rounded-full 
                  bg-gradient-to-br from-[#FA5500] to-[#ff8833]
                  flex items-center justify-center
                  shadow-lg shadow-[#FA5500]/50
                ">
                  <User className="w-5 h-5 text-white" />
                </div>

                <div className="flex-1">
                  <h1 className="text-white font-bold text-base flex items-center gap-1">
                    {user.name.split(" ")[0]} <span>👋</span>
                  </h1>
                  <p className="text-gray-100 text-xs truncate">
                    {user.email}
                  </p>
                </div>
              </div>

              {/* Logout Button */}
              <button
                onClick={openLogoutModal}
                className="w-full mt-2 py-2 flex items-center justify-center gap-2
                           bg-red-500/20 border border-red-400/40 rounded-xl 
                           text-white font-medium backdrop-blur-md 
                           hover:bg-red-500/30 active:scale-95 transition"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserNameAndDetails;
