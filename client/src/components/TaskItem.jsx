import { Circle, GripVertical, Ellipsis } from "lucide-react";

const TaskItem = ({ title = "Add you task :)" }) => {
  return (
    <div className="flex items-center justify-between w-full py-1 px-3 rounded hover:bg-gray-100 transition-all group cursor-pointer">
      {/* Left: Drag + Title */}
      <div className="flex items-center gap-3">
        {/* Flex approach for icon swap */}
        <div className="flex items-center justify-center w-5 h-5">
          <Circle className="text-gray-400 group-hover:hidden" />
          <GripVertical className="text-gray-400 hidden group-hover:inline cursor-grab" />
        </div>

        <span className="text-[15px] text-gray-800 font-medium select-none">
          {title}
        </span>
      </div>

      {/* Right: Ellipsis Icon */}
      <Ellipsis className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
    </div>
  );
};

export default TaskItem;
