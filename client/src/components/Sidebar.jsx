import React from "react";
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

function Sidebar() {
  return (
    <aside className="h-screen flex flex-col justify-between border-r-1 border-gray-300 py-4">
      {/* Top: Main navigation */}
      <div className="flex flex-col items-center gap-2">
        <div className="mb-6 hover:bg-gray-100 p-3 rounded-2xl">
          <div className="flex items-center justify-center text-gray-100 bg-blue-400 w-6 h-6 rounded-full text-xl font-bold font-mono italic cursor-pointer select-none">
            Q
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {menuItems.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="p-3 rounded-2xl text-gray-800 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              {item.icon}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Bottom: Logout */}
      <div className="flex flex-col items-center">
        <button className="group relative flex items-center justify-center p-3 text-gray-800 hover:bg-gray-100 rounded-2xl transition-colors cursor-pointer">
          <LogOut className="w-6 h-6" />
          <span className="absolute left-full ml-3 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity z-10">
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
