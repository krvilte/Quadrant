import React, { useState } from "react";
import useTaskStore from "../app/TaskStore";

const formFields = [
  {
    id: "title",
    label: "Title",
    name: "title",
    type: "text",
    placeholder: "Task name",
    required: true,
  },
  {
    id: "description",
    label: "Description",
    name: "description",
    type: "textarea",
    placeholder: "Task details (optional)",
    required: false,
  },
  {
    id: "priority",
    label: "Priority",
    name: "priority",
    type: "select",
    options: ["high", "medium", "low"],
  },
  {
    id: "dueDate",
    label: "Due Date",
    name: "dueDate",
    type: "date",
  },
];

function AddTaskDialog({ status = "do", onClose }) {
  const addTask = useTaskStore((state) => state.addTask);

  const [formData, setFormData] = useState({
    id: Date.now(),
    title: "",
    description: "",
    priority: "medium",
    dueDate: "",
    quadrant: status,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-2">
      <div className="bg-white w-full max-w-[700px] rounded-lg p-6 shadow-lg">
        <h2 className="text-lg font-bold mb-4 text-gray-800">Add New Task</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {formFields.map((field) => (
            <div key={field.id}>
              <label
                htmlFor={field.id}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {field.label}
                {field.required && <span className="text-red-500">*</span>}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  name={field.name}
                  rows={3}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="w-full border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring focus:ring-gray-400"
                  value={formData[field.name]}
                  onChange={handleChange}
                />
              ) : field.type === "select" ? (
                <select
                  id={field.id}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-gray-400"
                >
                  {field.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-gray-400"
                  value={formData[field.name]}
                  onChange={handleChange}
                />
              )}
            </div>
          ))}

          {/* Buttons */}
          <div className="flex justify-between items-center pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-4 py-2 text-sm bg-gray-800 text-white rounded hover:bg-gray-700"
            >
              Save Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTaskDialog;
