function TaskNavigation({ options, onClose }) {
  return (
    <div className="min-w-[140px] rounded-md border border-gray-100 bg-white shadow-md overflow-hidden">
      {options.map((o, i) => (
        <div
          key={i}
          onClick={() => {
            o.onClick();
            onClose();
          }}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 hover:text-white cursor-pointer"
        >
          {o.name}
        </div>
      ))}
    </div>
  );
}

export default TaskNavigation;
