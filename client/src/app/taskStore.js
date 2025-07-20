import { create } from "zustand";
import tasks from "./tasksSchema";

const taskStore = (set) => ({
  tasks: tasks,
  setTasks: (tasks) => set({ tasks }),
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  deleteTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) })),
});

const useTaskStore = create(taskStore);
export default useTaskStore;
