import React from "react";
import Quadrant from "./Quadrant";
import { CircleCheck } from "lucide-react";

const quadrants = [
  {
    key: "do",
    title: "Do First",
    icon: <CircleCheck className="w-5 h-5 text-green-600" />,
    color: "text-green-600",
  },
  {
    key: "decide",
    title: "Decide",
    icon: <CircleCheck className="w-5 h-5 text-yellow-500" />,
    color: "text-yellow-500",
  },
  {
    key: "delegate",
    title: "Delegate",
    icon: <CircleCheck className="w-5 h-5 text-blue-600" />,
    color: "text-blue-600",
  },
  {
    key: "delete",
    title: "Delete",
    icon: <CircleCheck className="w-5 h-5 text-red-600" />,
    color: "text-red-600",
  },
];

function ActionCards() {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      {quadrants.map((q) => (
        <Quadrant key={q.key} title={q.title} icon={q.icon} color={q.color} />
      ))}
    </div>
  );
}

export default ActionCards;
