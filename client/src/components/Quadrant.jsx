import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { CirclePlus } from "lucide-react";
import AddTaskDialog from "./AddTaskDialog";

function Quadrant({ status, title, icon }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <AddTaskDialog status={status} onClose={() => setOpen(false)} />}

      <div className="bg-white border-gray-100 border p-4 rounded-lg">
        <div className="flex flex-col items-start gap-4">
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
            type="button"
            name={status}
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center justify-center gap-2 w-full p-1 rounded bg-gray-100 text-gray-800 font-semibold transition-colors hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            <span className="tracking-wide">New Task</span>
            <CirclePlus
              className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Quadrant;
