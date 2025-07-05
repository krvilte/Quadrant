import React from "react";

function Error() {
  return (
    <div className="flex items-center justify-center h-screen bg-red-50 text-gray-800 text-xl font-semibold">
      <div className="flex text-2xl text-gray-800 flex-col items-center justify-center gap-2">
        404 Page not found <span className="text-6xl">😞</span>
      </div>
    </div>
  );
}

export default Error;
