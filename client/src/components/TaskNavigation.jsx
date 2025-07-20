function TaskNavigation({ options = [], onClose }) {
  return (
    <div className="w-20 rounded-md border border-gray-200 bg-white shadow-lg overflow-hidden">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => {
            option.onClick();
            onClose();
          }}
          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-all"
        >
          {option.name}
        </button>
      ))}
    </div>
  );
}

export default TaskNavigation;
