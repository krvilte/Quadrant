import React from "react";
import Quadrant from "./Quadrant";
import { Check } from "lucide-react";

const quadrants = [
  {
    id: "do",
    title: "Do First",
    icon: <Check className="w-4 h-4 rounded bg-green-400 text-white" />,
    color: "text-green-600",
  },
  {
    id: "decide",
    title: "Decide",
    icon: <Check className="w-4 h-4 rounded bg-yellow-400 text-white" />,
    color: "text-yellow-500",
  },
  {
    id: "delegate",
    title: "Delegate",
    icon: <Check className="w-4 h-4 rounded bg-blue-400 text-white" />,
    color: "text-blue-600",
  },
  {
    id: "delete",
    title: "Delete",
    icon: <Check className="w-4 h-4 rounded bg-red-400 text-white" />,
    color: "text-red-600",
  },
];

function ActionCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
      {quadrants.map((q) => (
        <Quadrant
          key={q.id}
          status={q.id}
          title={q.title}
          icon={q.icon}
          color={q.color}
        />
      ))}
    </div>
  );
}

export default ActionCards;
