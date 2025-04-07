import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LeftWall from "./LeftWall";

import Lupa from "../assets/svg/lupa.svg";
import Noteacher from "../assets/svg/noteachers.svg";
import AuthContext from "../context/AuthContext";
import Logout from "../components/Logout";

import axios from "axios";

const Billings = () => {
  const navigate = useNavigate();

  const { token, setToken, setUser } = useContext(AuthContext) || {};
  const finalToken = token || localStorage.getItem("token");

  return (
    <div className="mx-auto bg-white ">
      <div className="flex h-screen ">
        <div className="flex h-full">
          <LeftWall />
        </div>

        <div className="flex flex-col w-full pt-[30px]  ml-[38px] mr-[100px]">
          <Logout />
          <div className="flex items-baseline justify-between ">
            <h2 className="text-[#4F4F4F]  text-[20px] font-[800]">Billings</h2>

            <button
              className="w-[140px] h-[40px] mr-[28px] bg-[#509CDB]  text-white py-2 mt-[15px]   transition duration-300 ease-in-out  rounded-[8px] hover:bg-[#1a6ca7] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-opacity-50 cursor-pointer active:scale-95"
              // onClick={() => navigate("/CreateProfile")}
            >
              Add Billing
            </button>
          </div>

          <div className="flex items-center w-full space-x-2 my-[30px]">
            <button
              className="p-2 text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
              type="button"
            >
              <img
                src={Lupa}
                alt="Dashboard Icon"
                className="w-[20px] h-[20px] transition bg-[#FCFAFA]  duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg cursor-pointer"
              />
            </button>
            <input
              type="text"
              placeholder="Search for a student by name or email"
              className="flex-1 p-2 border border-gray-300 rounded-lg  bg-[#FCFAFA] focus:outline-none focus:border-[#509CDB]  cursor-pointer  text-[14px]"
            />
          </div>

          <div className="py-[30px] pb-[100px]   bg-[#FCFAFA]">
            <img
              src={Noteacher}
              alt=""
              className="w-[340px] h-[255px] rounded-[50px]   mx-auto"
            />
            <h2 className="text-[#4F4F4F]  text-center text-[28px] font-[700] mt-[16px] ">
              No Billings at this time
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

export default Billings;
