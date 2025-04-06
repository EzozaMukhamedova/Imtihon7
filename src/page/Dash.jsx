import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftWall from "./LeftWall";
import Classes from "../assets/svg/classes.svg";
import Admin from "../assets/svg/admins.png";
import Students from "../assets/svg/stidents.svg";
import Bell from "../assets/svg/belll.svg";
import AuthContext from "../context/AuthContext";

const Dash = () => {
  const navigate = useNavigate();
  const { token, setToken, setUser } = useContext(AuthContext) || {};
  const finalToken = token || localStorage.getItem("token");

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="h-screen mx-auto overflow-hidden ">
      <div className="flex h-full">
        <LeftWall />

        <div className="flex flex-col w-full bg-white ">
          <div className="bg-[#FCFAFA]  flex  justify-between items-center  pl-[168px] pt-[40px] pb-[15px]">
            <h2 className="text-[#4F4F4F]  text-[16px] font-[500]">
              <span className="font-bold"> Learn how to launch faster </span>
              <br />
              watch our webinar for tips from our experts and get a limited time
              offer.
            </h2>
            <img
              src={Bell}
              alt="Dashboard Icon"
              className="w-[28px] h-[28px] mr-[-140px] transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg cursor-pointer"
            />

            <button
              onClick={handleLogout}
              className=" py-2 w-[120px] h-[40px] font-medium text-white transition duration-300 ease-in-out bg-[#509CDB] rounded-[8px] hover:bg-[#1a6ca7] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-opacity-50 cursor-pointer active:scale-95 mr-[128px]"
            >
              Log out
            </button>
          </div>

          <div className="w-full bg-white  px-[90px] pl-[216px]">
            <h2 className="text-[#4F4F4F]  text-center text-[34px] font-[700] ml-[-216px] mt-[56px] mb-[23px]">
              Welcome to your dashboard, Udemy school
            </h2>
            <div className="flex items-center ">
              <h2 className="text-[22px] text-[#4F4F4F]  font-[700]">
                Uyo/school/@teachable.com
                <span className="font-bold"></span>{" "}
              </h2>
            </div>

            <div className=" flex flex-col mt-[40px] ">
              <div className="flex">
                {" "}
                <img
                  src={Admin}
                  alt="Dashboard Icon"
                  className="w-[36px] h-[36px] mr-[20px] "
                />
                <div className="flex flex-col ">
                  <span className="text-[#4F4F4F] text-[24px] font-[600] mb-[12px]  ">
                    Add other admins
                  </span>
                  <span className="text-[14px] text-[#4f4f4fdc]">
                    Create rich course content and coaching products for your
                    students. <br />
                    When you give them a pricing plan, they’ll appear on your
                    site!
                  </span>
                </div>
              </div>
            </div>

            <div className=" flex flex-col mt-[30px] ">
              <div className="flex">
                {" "}
                <img
                  src={Classes}
                  alt="Dashboard Icon"
                  className="w-[36px] h-[36px] mr-[20px] "
                />
                <div className="flex flex-col ">
                  <span className="text-[#4F4F4F] text-[24px] font-[600] mb-[12px]  ">
                    Add classes
                  </span>
                  <span className="text-[14px] text-[#4f4f4fdc]">
                    Create rich course content and coaching products for your
                    students. <br />
                    When you give them a pricing plan, they’ll appear on your
                    site!
                  </span>
                </div>
              </div>
            </div>

            <div className=" flex flex-col mt-[30px] mb-[50px]">
              <div className="flex">
                {" "}
                <img
                  src={Students}
                  alt="Dashboard Icon"
                  className="w-[36px] h-[36px] mr-[20px] "
                />
                <div className="flex flex-col ">
                  <span className="text-[#4F4F4F] text-[24px] font-[600] mb-[12px]  ">
                    Add students
                  </span>
                  <span className="text-[14px] text-[#4f4f4fdc]">
                    Create rich course content and coaching products for your
                    students. <br />
                    When you give them a pricing plan, they’ll appear on your
                    site!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
