import React from "react";

import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import LeftWall from "./LeftWall";

import Noteacher from "../assets/svg/noteachers.svg";

const Teacher = () => {
  const navigate = useNavigate();
  return (
    <div className="border w-[1440px] mx-auto">
      <Navbar />
      <div className="flex ">
        <LeftWall />

        <div className="flex flex-col mx-auto p-8  border w-[1056px]">
          <div className="flex items-baseline justify-between ">
            <h2 className="text-[#4F4F4F]  text-[20px] font-[800]">Teachers</h2>

            <button
              className="w-[140px] h-[40px] cursor-pointer bg-[#509CDB] rounded-[4px] text-white py-2 mt-[15px] hover:bg-[#138a9c] transition"
              onClick={() => navigate("/CreateProfile")}
            >
              Add Teachers
            </button>
          </div>

          <div className="flex items-center w-full space-x-2 my-[30px]">
            <input
              type="text"
              placeholder="Search for a student by name or email"
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none bg-[#FCFAFA] focus:border-teal-500"
            />
            {/* <button
                className="p-2 text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                type="button"
              >
                Search
              </button> */}
          </div>

          <div className="py-[30px] pb-[85px] border rounded-lg bg-[#FCFAFA]">
            <img
              src={Noteacher}
              alt=""
              className="w-[340px] h-[255px] rounded-[50px]  mx-[88px] mx-auto"
            />
            <h2 className="text-[#4F4F4F]  text-center text-[28px] font-[700] mt-[56px] ">
              No Teachers at this time
            </h2>
            <p className="text-[14px] text-center text-[#4F4F4F]">
              Teachers will appear here after they enroll in your school.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
