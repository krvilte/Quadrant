import React from "react";
import TaskItem from "./TaskItem";

function Quadrant({ status, title, icon }) {
  return (
    <div className="bg-white border-gray-100 border p-4 rounded-lg">
      <div className="flex flex-col items-start gap-3">
        {/* Header */}
        <div className="flex gap-2 items-center w-full">
          {icon}
          <h2
            className={`text-md font-semibold uppercase text-gray-600 select-none`}
          >
            {title}
          </h2>
        </div>

        {/* Task Item */}
        <div className="w-full">
          <TaskItem />
        </div>

        {/* Add Task */}
        <button
          className="hover:underline hover:text-blue-400"
          name={status}
          onClick={(e) => console.log(e.target.name)}
        >
          + New task
        </button>
      </div>
    </div>
  );
}

export default Quadrant;
