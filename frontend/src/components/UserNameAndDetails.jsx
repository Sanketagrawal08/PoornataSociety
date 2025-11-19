import React from 'react'
import { LogOut, User } from 'lucide-react';

const UserNameAndDetails = ({ user, openLogoutModal }) => {
  return (
    <div className="absolute top-6 right-6 z-20">
      <div className="bg-gradient-to-br from-[#FA5500]/20 to-[#ff7700]/20 backdrop-blur-md border border-[#FA5500]/30 rounded-2xl p-4 shadow-2xl shadow-[#FA5500]/20">
        <div className="flex items-center gap-4">
          
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FA5500] to-[#ff8833] flex items-center justify-center shadow-lg shadow-[#FA5500]/50">
            <User className="w-6 h-6 text-white" />
          </div>

          <div className="flex-1">
            <h1 className="text-white font-bold text-lg flex items-center gap-2">
              {user.name.split(" ")[0]}
              <span className="text-xl">👋</span>
            </h1>
            <p className="text-gray-100 text-sm font-medium">{user.email}</p>
          </div>

          {/* OPEN LOGOUT MODAL */}
          <button
            onClick={openLogoutModal}
            className="p-2.5 bg-gray-700 hover:bg-red-500/30 border border-red-400/30 rounded-xl transition-all duration-200 group hover:scale-105 active:scale-95"
          >
            <LogOut className="w-5 h-5 group-hover:text-red-300" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserNameAndDetails;
