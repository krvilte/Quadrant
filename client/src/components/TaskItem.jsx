import { Circle, GripVertical, Ellipsis } from "lucide-react";
import TaskNavigation from "./TaskNavigation";
import { useState, useRef, useEffect } from "react";

const TaskItem = ({
  title = "Untitled Task",
  description = "",
  priority = "medium",
  dueDate = "",
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close on outside click
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
    <div className="relative flex flex-col gap-2 w-full p-3 rounded hover:bg-gray-100 transition-all group cursor-pointer border border-gray-100">
      {/* Top Row */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-5 h-5">
            <Circle className="text-gray-400 group-hover:hidden" />
            <GripVertical className="text-gray-400 hidden group-hover:inline cursor-grab" />
          </div>
          <span className="text-[15px] text-gray-800 font-medium select-none line-clamp-1">
            {title}
          </span>
        </div>

        {/* Menu Icon */}
        <div className="relative" ref={menuRef}>
          <Ellipsis
            className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((prev) => !prev);
            }}
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

      {/* Description */}
      {description && (
        <p className="text-sm text-gray-600 ml-8 pr-2 line-clamp-2">
          {description}
        </p>
      )}

      {/* Bottom Row */}
      <div className="flex justify-between items-center text-xs text-gray-500 ml-8">
        <span
          className={`px-2 py-0.5 rounded-full font-medium capitalize ${
            {
              high: "bg-red-100 text-red-700",
              medium: "bg-yellow-100 text-yellow-700",
              low: "bg-green-100 text-green-700",
            }[priority] || "bg-gray-100 text-gray-600"
          }`}
        >
          {priority}
        </span>
        {dueDate && <span>📅 {dueDate}</span>}
      </div>
    </div>
  );
};

export default TaskItem;
