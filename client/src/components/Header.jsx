import React, { useMemo } from "react";
import { Bell, ChevronDown, Menu } from "lucide-react";
import { useLocation } from "react-router";

function Header({ onMenuClick }) {
  const location = useLocation();

  const pageTitle = useMemo(() => {
    if (location.pathname === "/") return "Home";
    if (location.pathname.includes("matrix")) return "Matrix";
    if (location.pathname.includes("settings")) return "Settings";
    if (location.pathname.includes("user")) return "User";
  }, [location.pathname]);

  return (
    <header className="flex justify-between items-center px-4 py-3 bg-gray-50 sm:px-6">
      <button
        onClick={onMenuClick}
        className="lg:hidden text-gray-800 p-3 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer"
        aria-label="Toggle Sidebar"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Page Title */}
      <h1 className="text-lg sm:text-xl font-sans font-semibold text-gray-800">
        {pageTitle}
      </h1>

      {/* Right Section */}
      <div className="flex items-center gap-4">
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
        <div className="hidden sm:flex items-center cursor-pointer">
          <div className="p-2 rounded-2xl hover:bg-gray-100">
            <div className="w-9 h-9 bg-yellow-200 text-gray-800 font-semibold rounded-full flex items-center justify-center text-md shadow-inner">
              V
            </div>
          </div>
          <div className="hover:bg-gray-100 rounded-md p-1">
            <ChevronDown className="w-4 h-4 text-gray-800 transition-colors" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
