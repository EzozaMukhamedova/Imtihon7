import React from "react";

import Logo from "../assets/svg/schoollogo.svg";
import Dashboard from "../assets/svg/dashboard.svg";
import Students from "../assets/svg/teacher.svg";
import Bank from "../assets/svg/bank.svg";
import Settig from "../assets/svg/setting-2.svg";
import Exams from "../assets/svg/exams.svg";

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
            <li className="py-[12px] px-[16px] border-white  flex-1">
              Dashboard
            </li>
          </div>

          <div className="flex items-center w-[202px] h-[40px] hover:bg-[#509CDB] cursor-pointer hover:rounded-[4px] px-[16px] transition duration-100 ease-in-out transform hover:translate-y-[-2px]">
            <img
              src={Dashboard}
              alt="Dashboard Icon"
              className="w-[16px] h-[16px] rounded-full "
            />
            <li className="py-[12px] px-[16px]  border-white ">Teachers</li>
          </div>

          <div className="flex items-center w-[202px] h-[40px] hover:bg-[#509CDB] cursor-pointer hover:rounded-[4px] px-[16px] transition duration-100 ease-in-out transform hover:translate-y-[-2px]">
            <img
              src={Students}
              alt="Dashboard Icon"
              className="w-[16px] h-[16px] rounded-full "
            />
            <li className="py-[12px] px-[16px] border-white  ">Students</li>
          </div>

          <div className="flex items-center w-[202px] h-[40px] hover:bg-[#509CDB] cursor-pointer hover:rounded-[4px] px-[16px] transition duration-100 ease-in-out transform hover:translate-y-[-2px]">
            <img
              src={Bank}
              alt="Dashboard Icon"
              className="w-[16px] h-[16px] rounded-full "
            />
            <li className="py-[12px] px-[16px]  border-white  ">Billing</li>
          </div>

          <div className="flex items-center w-[202px] h-[40px] hover:bg-[#509CDB] cursor-pointer hover:rounded-[4px] px-[16px] transition duration-100 ease-in-out transform hover:translate-y-[-2px]">
            <img
              src={Settig}
              alt="Dashboard Icon"
              className="w-[16px] h-[16px] rounded-full "
            />
            <li className="py-[12px] px-[16px]  border-white  ">
              Settings and profile
            </li>
          </div>

          <div className="flex items-center w-[202px] h-[40px] hover:bg-[#509CDB] cursor-pointer hover:rounded-[4px] px-[16px] transition duration-100 ease-in-out transform hover:translate-y-[-2px]">
            <img
              src={Exams}
              alt="Dashboard Icon"
              className="w-[16px] h-[16px] rounded-full "
            />
            <li className="py-[12px] px-[16px]  border-white  ">Exams</li>
          </div>

          <div className="flex items-center w-[202px] h-[40px] hover:bg-[#509CDB] cursor-pointer hover:rounded-[4px] px-[16px] transition duration-100 ease-in-out transform hover:translate-y-[-2px] mt-[114px]">
            <img
              src={Bank}
              alt="Dashboard Icon"
              className="w-[16px] h-[16px] rounded-full "
            />
            <li className="py-[12px] px-[16px]  cursor-pointer">Features</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default LeftWall;
