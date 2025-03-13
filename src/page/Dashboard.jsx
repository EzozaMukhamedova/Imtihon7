import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute top-0 left-0 z-10 w-full">
          {" "}
          <Navbar />
        </div>

        <div className="absolute top-0 left-0 w-full h-full dark-overlay"></div>

        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-center text-white ">
          <h1 className="text-[64px] font-bold mb-[10px]">
            Developer Connector
          </h1>
          <h2 className="text-[24px]">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </h2>
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => navigate("/register")}
              className="px-[21px] py-[8px] bg-[#17A2B8] text-amber-50  cursor-pointer transition-all duration-300 hover:bg-[#17a3b8bd]"
            >
              Sign Up
            </button>
            <button
              onClick={() => navigate("/login")}
              className="px-[21px] py-[8px] bg-[#f4f4f4] hover:bg-[#f4f4f4c1] transition-all duration-300 text-black cursor-pointer"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
