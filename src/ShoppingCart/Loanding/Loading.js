import React from "react";

function Loanding() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex space-x-4">
        <div className="w-6 h-6 bg-gray-700 rounded-full animate-fade delay-[0.66s]"></div>
        <div className="w-6 h-6 bg-gray-700 rounded-full animate-fade"></div>
        <div className="w-6 h-6 bg-gray-700 rounded-full animate-fade delay-[0.33s]"></div>
      </div>
    </div>
  );
}

export { Loanding };
