import React from "react";
import { RiCodeSSlashLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#343a40]  border-b-[1px] border-b-[#17A2B8]">
        <div className="bg-[#343a40] w-[1440px] m-auto flex items-center justify-between  h-[61px] text-white">
          <div className="flex hover:text-[#17a2b8] cursor-pointer">
            <p className="flex items-center text-white hover:text-[#17a2b8]">
              <RiCodeSSlashLine className="w-[25px] h-[25px] stroke-[1]" />

              <span className="pl-[10px] text-[25px] font-[700] ">
                {" "}
                DevConnector
              </span>
            </p>
          </div>
          <ul className="flex">
            <li>
              <NavLink
                to={"/"}
                className="text-white p-[8px] text-[17px] hover:text-[#17a2b8]"
              >
                Developers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className="text-white p-[8px] text-[17px] hover:text-[#17a2b8]"
              >
                Register
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/login"
                className="text-white pl-[8px] text-[17px] hover:text-[#17a2b8]"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
