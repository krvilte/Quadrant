import React from "react";
import { Plus } from "lucide-react";

function Quadrant({ status, title, icon }) {
  return (
    <div className="p-4 bg-white border border-gray-100 rounded-lg">
      <div className="flex flex-col items-start mb-6">
        {/* Header */}
        <div className="flex gap-2 items-center w-full py-2 mb-4">
          {icon}
          <h2
            className={`text-md font-semibold uppercase text-gray-600 select-none`}
          >
            {title}
          </h2>
        </div>

        {/* Task Placeholder */}
        <div className="mb-2 w-full">
          <p className="border border-gray-100 p-2 rounded">lorem ipsum</p>
        </div>

        {/* Add Task */}
        <button
          className="hover:underline hover:text-blue-400"
          name={status}
          onClick={(e) => console.log(e.target.name)}
        >
          + Add Task
        </button>
      </div>
    </div>
  );
}

export default Quadrant;
