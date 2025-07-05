import React from "react";
import { Bell, ChevronDown, Menu } from "lucide-react";

function Header({ onMenuClick }) {
  return (
    <header className="flex justify-between items-center px-4 py-3 bg-gray-50 sm:px-6">
      <button
        onClick={onMenuClick}
        className="sm:hidden text-gray-800 p-3 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer"
        aria-label="Toggle Sidebar"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Page Title */}
      <h1 className="text-lg sm:text-xl font-sans font-semibold text-gray-800">
        Dashboard
      </h1>

      {/* Right Section */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Notification Icon */}
        <button
          type="button"
          className="relative text-gray-800 p-3 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Notifications"
        >
          <Bell className="w-6 h-6 text-gray-800" />
          <span className="absolute top-3 right-3 block w-2 h-2 rounded-full bg-red-500"></span>
        </button>

        {/* User Avatar + Chevron (hidden on mobile) */}
        <div className="hidden sm:flex items-center gap-2 cursor-pointer">
          <div className="w-9 h-9 bg-gray-200 text-gray-800 font-semibold rounded-full flex items-center justify-center text-md shadow-inner">
            V
          </div>
          <ChevronDown className="w-6 h-6 text-gray-600 transition-colors" />
        </div>
      </div>
    </header>
  );
}

export default Header;
