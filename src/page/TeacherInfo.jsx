import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import LeftWall from "./LeftWall";
import Portfel from "../assets/svg/partfel.svg";
import Tel from "../assets/svg/tel.svg";
import Bakalavr from "../assets/svg/bakalvr.svg";
import Logout from "../components/Logout";
import { Skeleton } from "antd";

const TeacherInfo = () => {
  const { teacherId } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeacherDetails = async () => {
      try {
        const response = await axios.get(
          `https://green-shop-backend.onrender.com/api/flower/category/small-plants/${teacherId}?access_token=67dbc36eaf06d13e0cde0c21`
        );
        setTeacher(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching teacher details:", error);
        setLoading(false);
      }
    };

    fetchTeacherDetails();
  }, [teacherId, navigate]);

  if (loading) {
    return (
      <div className="flex h-screen mx-auto bg-white">
        <LeftWall />
        <div className="flex items-center justify-center flex-grow">
          <div className="flex flex-col items-center">
            <Skeleton.Avatar active size={280} shape="circle" />

            <Skeleton.Input
              style={{ width: 200, marginTop: 50 }}
              active
              size="large"
            />
          </div>
          <div className="ml-[50px]">
            {" "}
            <Skeleton paragraph={{ rows: 2, width: ["100%", 400] }} active />
          </div>
        </div>
      </div>
    );
  }

  if (!teacher) {
    return <p>Loading...</p>;
  }

  return (
    <div className="h-screen mx-auto bg-white ">
      <div className="flex h-full">
        <LeftWall />
        <div className="w-full ">
          <div className="mt-[30px]  ">
            <Logout />
          </div>

          <div className="flex w-full overflow-hidden bg-white  py-[90px] pl-[229px] items-center">
            <div className="flex flex-col items-center justify-center w-1/3 mx-auto ">
              <img
                src={teacher.main_image || "/default-image.jpg"}
                alt={teacher.title}
                className="object-cover w-[280px] h-[280px] rounded-full border border-blue-200 transition-transform duration-2000 hover:scale-125 cursor-pointer"
              />

              <h1 className="mt-10 text-2xl font-bold tracking-widest text-center text-gray-500 ">
                {teacher.title}
              </h1>

              <div className="flex items-center justify-center mt-4 space-x-4">
                <button className="p-2 transition duration-300 cursor-pointer hover:scale-110 ">
                  <img
                    src={Portfel}
                    alt="Dashboard Icon"
                    className="w-[60px] h-[60px] transition-transform duration-300"
                  />
                </button>

                <button className="p-2 transition duration-300 cursor-pointer hover:scale-110 ">
                  <img
                    src={Tel}
                    alt="Dashboard Icon"
                    className="w-[60px] h-[60px]"
                  />
                </button>

                <button className="p-2 transition duration-300 cursor-pointer hover:scale-110">
                  <img
                    src={Bakalavr}
                    alt="Dashboard Icon"
                    className="w-[60px] h-[60px]"
                  />
                </button>
              </div>
            </div>

            <div className="w-2/3 p-4">
              {/* <h1 className="mb-2 text-2xl font-bold text-gray-800">
                {teacher.title}
              </h1> */}
              <p className="mb-4 text-[28px] font-semibold text-blue-400">
                ${teacher.price}
              </p>

              <div className="py-4 border-t w-[400px] border-gray-300">
                <h2 className="mb-2 text-lg font-semibold text-gray-700">
                  Description
                </h2>
                <p className="text-base text-gray-600 w-[400px]">
                  {teacher.short_description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherInfo;
