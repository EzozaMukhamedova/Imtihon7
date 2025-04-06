import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/svg/schoollogo.svg";
import Dashboard from "../assets/svg/dashboard.svg";
import Students from "../assets/svg/teacher.svg";
import Bank from "../assets/svg/bank.svg";
import Settig from "../assets/svg/setting-2.svg";
import Exams from "../assets/svg/exams.svg";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

const checkActive = (path) => {
  const location = useLocation();
  return ["/teacher", "/addTeacher", "/CreateProfile", "/teacher-info"].some(
    (prefix) => location.pathname.startsWith(prefix)
  );
};

const LeftWall = () => {
  return (
    <div>
      <div className="bg-[#152259] text-[14px] h-full w-full pt-[26px]">
        <img
          src={Logo}
          alt=""
          className="w-[65px] h-[65px] rounded-[50px]  mx-[88px]"
        />
        <span className="flex justify-center text-center text-white mt-[22px] mb-[40px] text-[14px]">
          Udemy Inter. school
        </span>
        <ul className="text-white px-[25px] pt-[86px] border-t border-blue-300 mt-[27px] ">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center w-[202px] h-[40px] rounded-[4px] px-[16px] cursor-pointer transition duration-100 ease-in-out ${
                isActive
                  ? "bg-[#1a6ca778] hover:bg-[#1a6ca7]"
                  : "hover:bg-[#509CDB] hover:translate-y-[-2px]"
              }`
            }
          >
            <img
              src={Dashboard}
              alt="Dashboard Icon"
              className="w-[16px] h-[16px] mr-[16px] rounded-full"
            />
            <li className="py-[12px] flex-1 text-white">Dashboard</li>
          </NavLink>

          <NavLink
            to="/teacher"
            className={`flex items-center w-[202px] h-[40px] px-[16px] cursor-pointer transition duration-100 ease-in-out transform ${
              checkActive(location.pathname)
                ? "bg-[#1a6ca778] rounded-[4px]"
                : "hover:bg-[#509CDB] hover:rounded-[4px] hover:translate-y-[-2px]"
            }`}
          >
            <img
              src={Dashboard}
              alt="Dashboard Icon"
              className="w-[16px] h-[16px] rounded-full mr-4"
            />
            <li className="py-[12px] flex-1 text-white">Teachers</li>
          </NavLink>

          <NavLink
            to="/students"
            className={({ isActive }) =>
              `flex items-center w-[202px] h-[40px] px-[16px] cursor-pointer transition duration-100 ease-in-out transform ${
                isActive
                  ? "bg-[#1a6ca778] rounded-[4px]"
                  : "hover:bg-[#509CDB] hover:rounded-[4px] hover:translate-y-[-2px]"
              }`
            }
          >
            <img
              src={Students}
              alt="Dashboard Icon"
              className="w-[16px] h-[16px] rounded-full mr-4"
            />
            <li className="py-[12px] flex-1 text-white">Students</li>
          </NavLink>

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

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center w-[202px] h-[40px] px-[16px] cursor-pointer transition duration-100 ease-in-out transform ${
                isActive
                  ? "bg-[#1a6ca778] rounded-[4px]"
                  : "hover:bg-[#509CDB] hover:rounded-[4px] hover:translate-y-[-2px]"
              }`
            }
          >
            <img
              src={Settig}
              alt="Settings Icon"
              className="w-[16px] h-[16px] rounded-full mr-4"
            />
            <li className="py-[12px] flex-1 text-white">
              Settings and profile
            </li>
          </NavLink>

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

          <NavLink
            to="/features"
            className={({ isActive }) =>
              `flex items-center w-[202px] h-[40px] mt-[114px] px-[16px] cursor-pointer transition duration-100 ease-in-out transform ${
                isActive
                  ? "bg-[#1a6ca778] rounded-[4px]"
                  : "hover:bg-[#509CDB] hover:rounded-[4px] hover:translate-y-[-2px]"
              }`
            }
          >
            <img
              src={Bank}
              alt="Features Icon"
              className="w-[16px] h-[16px] rounded-full mr-4"
            />
            <li className="py-[12px] flex-1 text-white">Features</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default LeftWall;
