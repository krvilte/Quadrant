import { useState, useRef, useEffect } from "react";
import { Circle, GripVertical, Ellipsis } from "lucide-react";
import TaskNavigation from "./TaskNavigation";

const TaskItem = ({ taskData }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const { title, priority, status } = taskData;

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleEdit = () => {
    console.log("Edit");
  };

  const handleDelete = () => {
    console.log("Delete");
  };

  const navigationOptions = [
    { name: "Edit", onClick: handleEdit },
    { name: "Delete", onClick: handleDelete },
  ];

  return (
    <div className="relative flex flex-col w-full p-3 rounded-lg border border-gray-200 bg-white shadow-sm hover:bg-gray-50 transition-all group cursor-pointer">
      {/* Top Row: Title & Menu */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          {/* Drag or Complete Icon */}
          <div className="w-5 h-5 flex items-center justify-center text-gray-400">
            <Circle className="group-hover:hidden block" />
            <GripVertical className="hidden group-hover:block cursor-grab" />
          </div>

          {/* Task Title */}
          <span className="text-sm font-medium text-gray-800 line-clamp-1 select-none">
            {title}
          </span>
        </div>

        {/* Action Menu */}
        <div className="relative" ref={menuRef}>
          <Ellipsis
            className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((prev) => !prev);
            }}
            aria-label="Task options"
          />
          {open && (
            <div className="absolute right-0 mt-1 z-50">
              <TaskNavigation
                options={navigationOptions}
                onClose={() => setOpen(false)}
              />
            </div>
          )}
        </div>
      </div>

      {/* Bottom Row: Status & Priority */}
      <div className="flex items-center gap-2 text-xs mt-2 ml-8 text-gray-500">
        {/* Priority Badge */}
        <span
          className={`px-2 py-0.5 rounded-full capitalize font-medium ${
            {
              high: "bg-red-100 text-red-700",
              medium: "bg-yellow-100 text-yellow-700",
              low: "bg-green-100 text-green-700",
            }[priority] || "bg-gray-200 text-gray-600"
          }`}
        >
          {priority}
        </span>

        {/* Status Tag */}
        <span className="capitalize">{status}</span>
      </div>
    </div>
  );
};

export default TaskItem;
