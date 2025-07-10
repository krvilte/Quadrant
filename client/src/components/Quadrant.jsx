import React from "react";

function Quadrant({ title, icon, color }) {
  return (
    <div className="p-6 bg-white rounded-md shadow-xs border border-gray-200 hover:shadow-md">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h2 className={`text-lg font-semibold ${color}`}>{title}</h2>
      </div>

      <p className="text-sm text-gray-400 italic">
        (Tasks will appear here...)
      </p>
    </div>
  );
}

export default Quadrant;
