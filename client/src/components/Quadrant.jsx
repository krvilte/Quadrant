import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { CirclePlus } from "lucide-react";
import AddTaskDialog from "./AddTaskDialog";
import useTaskStore from "../app/TaskStore";

function Quadrant({ status, title, icon }) {
  const [open, setOpen] = useState(false);
  const { tasks } = useTaskStore();

  console.log(typeof tasks);

  return (
    <>
      {open && <AddTaskDialog status={status} onClose={() => setOpen(false)} />}

      <div className="bg-white border-gray-100 border p-4 rounded-lg">
        <div className="flex flex-col items-start gap-4">
          {/* Header */}
          <div className="flex gap-2 items-center w-full">
            {icon}
            <h2 className="text-md font-semibold uppercase text-gray-600 select-none">
              {title}
            </h2>
          </div>

          {/* Task Items */}
          <div className="w-full flex flex-col gap-2">
            {tasks
              .filter((task) => task.quadrant === status)
              .map((task) => (
                <TaskItem key={task.id} taskData={task} />
              ))}
          </div>

          {/* Add Task Button */}
          <button
            type="button"
            name={status}
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center justify-center gap-2 w-full px-4 py-2 text-sm rounded bg-gray-100 text-gray-800 transition-colors hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            <span className="tracking-wide">New Task</span>
            <CirclePlus className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Quadrant;
