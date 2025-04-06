

import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { useGetProfileQuery } from "../redux/developersApi";
import { ImCheckmark } from "react-icons/im";

const Developers = () => {
  const navigate = useNavigate();
  const { data: profile, error, isLoading } = useGetProfileQuery();

  if (isLoading) return <Loading />;
  if (error)
    return <p className="text-red-500">Xatolik yuz berdi: {error.message}</p>;
  if (profile.length === 0)
    return (
      <p className="text-yellow-500">⚠ Profil ma'lumotlari mavjud emas!</p>
    );

  return (
    <>
      <Navbar />
      <div className="bg-white p-4 ml-[220px] rounded-lg">
        <h2 className="text-[#17a2b8] text-[50px] font-bold ">Developers</h2>
        <div className="flex items-center ">
          <h2 className="text-[24px] py-[15px]">
            Browse and connect with developers
          </h2>
        </div>

        {profile.map((item) => (
          <div
            key={item._id}
            className="border bg-[#f4f4f4] border-[#ccc] flex w-[955px] h-[248px] mb-[16px] items-center"
          >
            <div className="w-[214px] h-[214px] m-[15px] flex flex-col items-center">
              <img
                className="w-[234px] h-[234px] rounded-full object-cover"
                src={item.user.avatar}
                alt=""
              />
            </div>
            <div className="w-[428px] h-[174px] m-[15px]">
              <h3 className="text-[24px] font-[600]">{item.user.name}</h3>
              <p className=" text-[16px] my-[5px] h-[30px]">
                {item.status} at {item.company}
              </p>
              <p className="h-[30px] my-[16px]">{item.location}</p>
              <div className="flex gap-[8px]">
                <button
                  onClick={() => navigate(`/profile/${item.user._id}`)}
                  className="w-[119px] cursor-pointer bg-[#17a2b8] text-white h-[38.4px] p-[7px] border-[#17a2b8]  hover:bg-[#138496] transition-all duration-300"
                >
                  View Profile
                </button>
              </div>
            </div>
            <div className="w-[214px] flex items-center cursor-pointer overflow-hidden h-[174px]">
              <ul className="text-[#17a2b8] flex flex-col">
                {item.skills.slice(0, 4).map((skill, index) => (
                  <li key={index} className="flex items-center ">
                    <ImCheckmark className="mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Developers;
