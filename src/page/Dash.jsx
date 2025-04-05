import React from "react";
import { FaUser } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import LeftWall from "./LeftWall";

import Classes from "../assets/svg/classes.svg";
import Admin from "../assets/svg/admins.png";
import Students from "../assets/svg/stidents.svg";

const Dash = () => {
  const navigate = useNavigate();
  return (
    <div className="border w-[1440px]">
      <Navbar />
      <div className="flex ">
        <LeftWall />

        <div className="flex flex-col  p-8 ml-[127px] border">
          <h2 className="text-[#4F4F4F]  text-[16px] font-[500]">
            Learn how to launch faster <br />
            watch our webinar for tips from our experts and get a limited time
            offer.
          </h2>
          <div className="bg-white rounded-lg">
            <h2 className="text-[#4F4F4F]  text-center text-[36px] font-[700] mt-[56px] mb-[23px]">
              Welcome to your dashboard, Udemy school
            </h2>
            <div className="flex items-center justify-center text-center">
              <h2 className="text-[26px] ">
                Uyo/school/@teachable.com
                <span className="font-bold">
                  {/* {user?.name || "Guest"} */}
                </span>{" "}
              </h2>
            </div>

            <div className="mt-[10px] flex flex-col">
              <span className="text-[#4F4F4F] text-[24px] font-[600] mb-[16px]  letter-wider">
                Add other admins
              </span>
              <div className="flex">
                {" "}
                <img
                  src={Admin}
                  alt="Dashboard Icon"
                  className="w-[36px] h-[36px]  "
                />
                <span className="text-[14px] mb-[51px]">
                  Create rich course content and coaching products for your
                  students. <br />
                  When you give them a pricing plan, they’ll appear on your
                  site!
                </span>
              </div>
            </div>

            <div className="mt-[10px] flex flex-col">
              <span className="text-[#4F4F4F] text-[24px] font-bold mb-[16px]">
                Add classes
              </span>
              <span className="text-[14px] mb-[51px]">
                Create rich course content and coaching products for your
                students. <br />
                When you give them a pricing plan, they’ll appear on your site!
              </span>
            </div>

            <div className="mt-[10px] flex flex-col">
              <span className="text-[#4F4F4F] text-[24px] font-bold mb-[16px]">
                Add students
              </span>
              <span className="text-[14px] mb-[51px]">
                Create rich course content and coaching products for your
                students. <br />
                When you give them a pricing plan, they’ll appear on your site!
              </span>
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

export default Dash;
