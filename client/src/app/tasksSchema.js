/*
  // Task Schema
  {
    id: string,
    title: string,
    description: string,
    priority: "low" | "medium" | "high",
    dueDate: Date | null,
    createdAt: Date,
    updatedAt: Date,
    quadrant: "do" | "decide" | "delegate" | "delete",
    status: "pending" | "in-progress" | "completed",
  },
*/

const tasks = [
  {
    id: "1",
    title: "Finish UI for Doable",
    description: "Polish the quadrant layout and task interactions.",
    priority: "high",
    dueDate: new Date("2025-07-25"),
    createdAt: new Date("2025-07-18"),
    updatedAt: new Date("2025-07-18"),
    quadrant: "do",
    status: "in-progress",
  },
  {
    id: "2",
    title: "Schedule team meeting",
    description: "Decide agenda and send invites.",
    priority: "medium",
    dueDate: new Date("2025-07-22"),
    createdAt: new Date("2025-07-17"),
    updatedAt: new Date("2025-07-17"),
    quadrant: "decide",
    status: "pending",
  },
  {
    id: "3",
    title: "Delegate UI testing",
    description: "Assign to QA team and share test cases.",
    priority: "low",
    dueDate: null,
    createdAt: new Date("2025-07-15"),
    updatedAt: new Date("2025-07-16"),
    quadrant: "delegate",
    status: "pending",
  },
  {
    id: "4",
    title: "Unsubscribe from old tools",
    description: "Remove unused software accounts.",
    priority: "low",
    dueDate: null,
    createdAt: new Date("2025-07-10"),
    updatedAt: new Date("2025-07-12"),
    quadrant: "delete",
    status: "completed",
  },
  {
    id: "5",
    title: "Plan next sprint",
    description: "Review goals and define key deliverables.",
    priority: "high",
    dueDate: new Date("2025-07-27"),
    createdAt: new Date("2025-07-19"),
    updatedAt: new Date("2025-07-19"),
    quadrant: "do",
    status: "pending",
  },
];

export default tasks;
