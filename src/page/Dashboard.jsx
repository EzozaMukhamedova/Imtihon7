import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";

export default function Dashboard() {
  return (
    <>
      <div className="relative w-full h-[729px]">
        <Navbar />
        <div className="dark-overlay "></div>

        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-center text-white ">
          <h1 className="text-[64px]">Developer Connector</h1>
          <h2 className="text-[24px]">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </h2>
          <div className="flex gap-4 mt-4">
            <button className="px-[21px] py-[8px] bg-[#17A2B8] text-amber-50 rounded">
              Sign in
            </button>
            <button className="px-[21px] py-[8px] bg-[#f4f4f4] rounded">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
