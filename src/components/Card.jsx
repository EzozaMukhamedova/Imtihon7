import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-16 h-16 border-4 border-[#17a2b8] border-dashed rounded-full animate-spin"></div>

      <h1 className="mt-4 text-xl font-semibold text-gray-600">
        Loading, please wait...
      </h1>
    </div>
  );
}
