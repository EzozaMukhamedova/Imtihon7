import React from "react";

import Logo from "../assets/svg/schoollogo.svg";
import Dashboard from "../assets/svg/dashboard.svg";
import Students from "../assets/svg/teacher.svg";
import Bank from "../assets/svg/bank.svg";
import Settig from "../assets/svg/setting-2.svg";
import Exams from "../assets/svg/exams.svg";

import { Link } from "react-router-dom";

const LeftWall = () => {
  return (
    <div>
      <div className="bg-[#152259] text-[14px] h-full w-[251px] pt-[26px]">
        <img
          src={Logo}
          alt=""
          className="w-[65px] h-[65px] rounded-[50px]  mx-[88px]"
        />
        <span className="flex justify-center text-center text-white mt-[22px] mb-[40px] text-[14px]">
          Udemy Inter. school
        </span>
        <ul className="text-white px-[25px] pt-[86px] border-t border-white mt-[27px] ">
          <div className="flex items-center w-[202px] h-[40px] hover:bg-[#509CDB] cursor-pointer rounded-[4px] px-[16px] transition duration-100 ease-in-out transform hover:translate-y-[-2px]">
            <img
              src={Dashboard}
              alt="Dashboard Icon"
              className="w-[16px] h-[16px] rounded-full "
            />
            <Link to="/dashboard" className="block text-white">
              <li className="py-[12px] px-[16px] border-white  flex-1">
                Dashboard
              </li>
            </Link>
          </div>

          <div className="flex items-center w-[202px] h-[40px] hover:bg-[#509CDB] cursor-pointer hover:rounded-[4px] px-[16px] transition duration-100 ease-in-out transform hover:translate-y-[-2px]">
            <img
              src={Dashboard}
              alt="Dashboard Icon"
              className="w-[16px] h-[16px] rounded-full "
            />

            <Link to="/teacher" className="block text-white">
              <li className="py-[12px] px-[16px]  border-white ">Teachers</li>
            </Link>
          </div>

          <div className="flex items-center w-[202px] h-[40px] hover:bg-[#509CDB] cursor-pointer hover:rounded-[4px] px-[16px] transition duration-100 ease-in-out transform hover:translate-y-[-2px]">
            <img
              src={Students}
              alt="Dashboard Icon"
              className="w-[16px] h-[16px] rounded-full "
            />

            <Link to="/students" className="block text-white">
              <li className="py-[12px] px-[16px] border-white  ">Students</li>
            </Link>
          </div>

          <div className="flex items-center w-[202px] h-[40px] hover:bg-[#509CDB] cursor-pointer hover:rounded-[4px] px-[16px] transition duration-100 ease-in-out transform hover:translate-y-[-2px]">
            <img
              src={Bank}
              alt="Dashboard Icon"
              className="w-[16px] h-[16px] rounded-full "
            />

            <Link to="/billing" className="block text-white">
              <li className="py-[12px] px-[16px]  border-white  ">Billing</li>
            </Link>
          </div>

          <div className="flex items-center w-[202px] h-[40px] hover:bg-[#509CDB] cursor-pointer hover:rounded-[4px] px-[16px] transition duration-100 ease-in-out transform hover:translate-y-[-2px]">
            <img
              src={Settig}
              alt="Dashboard Icon"
              className="w-[16px] h-[16px] rounded-full "
            />
            <Link to="/settings" className="block text-white">
              <li className="py-[12px] px-[16px]  border-white  ">
                Settings and profile
              </li>
            </Link>
          </div>

          <div className="flex items-center w-[202px] h-[40px] hover:bg-[#509CDB] cursor-pointer hover:rounded-[4px] px-[16px] transition duration-100 ease-in-out transform hover:translate-y-[-2px]">
            <img
              src={Exams}
              alt="Dashboard Icon"
              className="w-[16px] h-[16px] rounded-full "
            />
            <Link to="/exams" className="block text-white">
              <li className="py-[12px] px-[16px]  border-white">Exams</li>
            </Link>
          </div>

          <div className="flex items-center w-[202px] h-[40px] hover:bg-[#509CDB] cursor-pointer hover:rounded-[4px] px-[16px] transition duration-100 ease-in-out transform hover:translate-y-[-2px] mt-[114px]">
            <img
              src={Bank}
              alt="Dashboard Icon"
              className="w-[16px] h-[16px] rounded-full "
            />
            <Link to="/features" className="block text-white">
              <li className="py-[12px] px-[16px]  cursor-pointer">Features</li>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default LeftWall;
