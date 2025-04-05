import React from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import LeftWall from "./LeftWall";

import Noteacher from "../assets/svg/noteachers.svg";

import Portfel from "../assets/svg/partfel.svg";
import Tel from "../assets/svg/tel.svg";
import Bakalavr from "../assets/svg/bakalvr.svg";

const TeacherInfo = () => {
  const handleRowClick = (teacherId) => {
    navigate(`/teacher-info/${teacherId}`); // `teacherId` bu har bir o'qituvchining noyob identifikatori bo'lishi kerak
  };
  const teachersData = [
    {
      name: "Kristin Watson",
      subject: "Chemistry",
      class: "JS 2",
      email: "michelle.rivera@example.com",
      gender: "Female",
    },
    {
      name: "Marvin McKinney",
      subject: "French",
      class: "JS 3",
      email: "debbie.baker@example.com",
      gender: "Female",
    },
    {
      name: "Jane Cooper",
      subject: "Maths",
      class: "JS 3",
      email: "kenzi.lawson@example.com",
      gender: "Female",
    },
    {
      name: "Cody Fisher",
      subject: "English",
      class: "JS 3",
      email: "nathan.roberts@example.com",
      gender: "Female",
    },
  ];

  const navigate = useNavigate();
  return (
    <div className="border w-[1440px] mx-auto">
      <Navbar />
      <div className="flex ">
        <LeftWall />

        <div className="flex overflow-hidden bg-white rounded-lg">
          <div className="w-1/3">
            <img
              src="/path-to-image.jpg"
              alt="Kristin Watson"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-2/3 p-4">
            <h1 className="text-xl font-semibold">Kristin Watson</h1>
            <p>tim.jennings@example.com</p>
            <div className="py-4">
              <h2 className="font-semibold text-gray-800">About</h2>
              <p className="text-sm text-gray-600 w-[335px]">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor. Voluptate exercitation incididunt aliquip
                deserunt reprehenderit elit laborum. Nulla Lorem mollit
                cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
                Voluptate exercitation incididunt aliquip deserunt reprehenderit
                elit laborum.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-semibold">Subject</div>
                <div>English</div>
              </div>
              <div>
                <div className="text-sm font-semibold">Class</div>
                <div>JS 1</div>
              </div>
              <div>
                <div className="text-sm font-semibold">Age</div>
                <div>34</div>
              </div>
              <div>
                <div className="text-sm font-semibold">Gender</div>
                <div>Male</div>
              </div>
            </div>
            <div className="flex mt-4 space-x-4">
              <button className="p-2 transition duration-300 rounded-full hover:bg-gray-200">
                <img
                  src={Portfel}
                  alt="Dashboard Icon"
                  className="w-[36px] h-[36px] mr-[20px] "
                />
              </button>
              <button className="p-2 transition duration-300 rounded-full hover:bg-gray-200">
                <img
                  src={Tel}
                  alt="Dashboard Icon"
                  className="w-[36px] h-[36px] mr-[20px] "
                />
              </button>
              <button className="p-2 transition duration-300 rounded-full hover:bg-gray-200">
                <img
                  src={Bakalavr}
                  alt="Dashboard Icon"
                  className="w-[36px] h-[36px] mr-[20px] "
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherInfo;
