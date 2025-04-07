import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import LeftWall from "./LeftWall";

import Classes from "../assets/svg/classes.svg";
import Admin from "../assets/svg/admins.png";
import Students from "../assets/svg/stidents.svg";

const Billing = () => {
  const navigate = useNavigate();
  return (
    <div className="border w-[1440px]">
      <Navbar />
      <div className="flex ">
        <LeftWall />

        <div className="flex flex-col  p-8 ml-[127px] border">
          <h2 className="text-[#4F4F4F]  text-[16px] font-[500]">
            Billins page
          </h2>
          <div className="bg-white rounded-lg">
            <h2 className="text-[#4F4F4F]  text-center text-[36px] font-[700] mt-[56px] mb-[23px]">
              Welcome to your dashboard, Udemy school
            </h2>
            <div className="flex items-center ">
              <h2 className="text-[24px] text-[#4F4F4F] ml-[10px] font-[700]">
                Uyo/school/@teachable.com
                <span className="font-bold">
     
                </span>{" "}
              </h2>
            </div>

            <div className=" flex flex-col mt-[71px] mb-[51px]">
              <div className="flex">
                {" "}
                <img
                  src={Admin}
                  alt="Dashboard Icon"
                  className="w-[36px] h-[36px] mr-[20px] "
                />
                <div className="flex flex-col ">
                  <span className="text-[#4F4F4F] text-[24px] font-[600] mb-[16px]  ">
                    Add other admins
                  </span>
                  <span className="text-[14px] ">
                    Create rich course content and coaching products for your
                    students. <br />
                    When you give them a pricing plan, they’ll appear on your
                    site!
                  </span>
                </div>
              </div>
            </div>

            <div className=" flex flex-col mt-[71px] mb-[51px]">
              <div className="flex">
                {" "}
                <img
                  src={Classes}
                  alt="Dashboard Icon"
                  className="w-[36px] h-[36px] mr-[20px] "
                />
                <div className="flex flex-col ">
                  <span className="text-[#4F4F4F] text-[24px] font-[600] mb-[16px]  ">
                    Add classes
                  </span>
                  <span className="text-[14px] ">
                    Create rich course content and coaching products for your
                    students. <br />
                    When you give them a pricing plan, they’ll appear on your
                    site!
                  </span>
                </div>
              </div>
            </div>

            <div className=" flex flex-col mt-[71px] mb-[51px]">
              <div className="flex">
                {" "}
                <img
                  src={Students}
                  alt="Dashboard Icon"
                  className="w-[36px] h-[36px] mr-[20px] "
                />
                <div className="flex flex-col ">
                  <span className="text-[#4F4F4F] text-[24px] font-[600] mb-[16px]  ">
                    Add students
                  </span>
                  <span className="text-[14px] ">
                    Create rich course content and coaching products for your
                    students. <br />
                    When you give them a pricing plan, they’ll appear on your
                    site!
                  </span>
                </div>
              </div>
            </div>

            <button
              className="w-[140px] h-[40px] cursor-pointer bg-[#17a2b8] text-white py-2 mt-[15px] hover:bg-[#138a9c] transition"
              onClick={() => navigate("/CreateProfile")}
            >
              Create Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
