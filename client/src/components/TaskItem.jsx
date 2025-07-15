import { Circle, GripVertical, Ellipsis } from "lucide-react";

const TaskItem = ({
  title = "Untitled Task",
  description = "",
  priority = "medium",
  dueDate = "",
}) => {
  const priorityColor = {
    high: "bg-red-100 text-red-700",
    medium: "bg-yellow-100 text-yellow-700",
    low: "bg-green-100 text-green-700",
  };

  return (
    <div className="flex flex-col gap-2 w-full p-3 rounded hover:bg-gray-100 transition-all group cursor-pointer border border-gray-100">
      {/* Top Row: Title & Drag */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          {/* Drag Icon Logic */}
          <div className="flex items-center justify-center w-5 h-5">
            <Circle className="text-gray-400 group-hover:hidden" />
            <GripVertical className="text-gray-400 hidden group-hover:inline cursor-grab" />
          </div>

          <span className="text-[15px] text-gray-800 font-medium select-none line-clamp-1">
            {title}
          </span>
        </div>

        {/* Menu Icon */}
        <Ellipsis className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
      </div>

      {/* Optional: Description */}
      {description && (
        <p className="text-sm text-gray-600 ml-8 pr-2 line-clamp-2">
          {description}
        </p>
      )}

      {/* Bottom Row: Priority + Due Date */}
      <div className="flex justify-between items-center text-xs text-gray-500 ml-8">
        <span
          className={`px-2 py-0.5 rounded-full font-medium capitalize ${
            priorityColor[priority] || "bg-gray-100 text-gray-600"
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
