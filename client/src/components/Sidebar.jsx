import React, { useEffect, useRef } from "react";
import { House, Grid2x2, Settings, User, LogOut } from "lucide-react";
import { NavLink } from "react-router";

const menuItems = [
  { icon: <House className="w-6 h-6" />, text: "Home", path: "/" },
  { icon: <Grid2x2 className="w-6 h-6" />, text: "Matrix", path: "/matrix" },
  {
    icon: <Settings className="w-6 h-6" />,
    text: "Settings",
    path: "/settings",
  },
  { icon: <User className="w-6 h-6" />, text: "User", path: "/user" },
];

function Sidebar({ isOpen, onClose }) {
  const sidebarRef = useRef(null);

  // Click outside to close logic
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose(); // only closes if click is outside
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black/30 z-30 transition-opacity lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-40 h-full w-20 bg-white border-r border-gray-200 transition-transform duration-300
    ${isOpen ? "translate-x-0" : "-translate-x-full"} 
    lg:translate-x-0 lg:relative`}
      >
        {/* Content: full-height flex to align everything */}
        <div className="flex flex-col justify-between h-full">
          {/* Top: Logo + Menu */}
          <div className="flex flex-col items-center gap-2 py-4">
            <NavLink to="/" onClick={onClose}>
              <div className="mb-6 hover:bg-gray-100 p-3 rounded-2xl">
                <div className="flex items-center justify-center text-gray-100 bg-blue-400 w-6 h-6 rounded-full text-xl font-bold font-mono italic cursor-pointer select-none">
                  Q
                </div>
              </div>
            </NavLink>

            <div className="flex flex-col gap-5">
              {menuItems.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `p-3 rounded-2xl text-gray-800 transition-colors cursor-pointer ${
                      isActive ? "bg-gray-600 text-white" : "hover:bg-gray-100"
                    }`
                  }
                >
                  {item.icon}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Bottom: Logout */}
          <div className="flex items-center flex-col pb-4">
            <button
              className="group relative flex items-center justify-center p-3 text-gray-800 hover:bg-gray-100 rounded-2xl transition-colors cursor-pointer"
              onClick={() => {
                if (onClose) onClose();
              }}
            >
              <LogOut className="w-6 h-6" />
              <span className="absolute left-full ml-3 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity z-10">
                Logout
              </span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
