import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden relative">
      {/* Sidebar rendered outside layout flow — doesn't take space */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main area (Header + Content) */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header onMenuClick={handleMenuClick} />
        <main className="flex-1 rounded-tl-lg overflow-y-auto overflow-x-hidden px-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
