import React from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import LeftWall from "./LeftWall";

import Noteacher from "../assets/svg/noteachers.svg";

const AddTeacher = () => {
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

        <div className="flex flex-col mx-auto p-8  border w-[1056px]">
          <div className="flex items-baseline justify-between ">
            <h2 className="text-[#4F4F4F]  text-[20px] font-[800]">Teachers</h2>

            <button className="w-[140px] h-[40px] cursor-pointer bg-[#509CDB] rounded-[4px] text-white py-2 mt-[15px] hover:bg-[#138a9c] transition">
              Add Teachers
            </button>
          </div>

          <div className="flex items-center w-full space-x-2 my-[30px]">
            <input
              type="text"
              placeholder="Search for a student by name or email"
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none bg-[#FCFAFA] focus:border-teal-500"
            />
            {/* <button
                className="p-2 text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                type="button"
              >
                Search
              </button> */}
          </div>

          <div className="relative overflow-x-auto sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <Link to="/teacher-info" className="block ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Subject
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Class
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email address
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Gender
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {teachersData.map((teacher, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b cursor-pointer hover:bg-gray-100"
                      //   onClick={() => handleRowClick(teacher.id)}
                    >
                      <td className="px-6 py-4">{teacher.name}</td>
                      <td className="px-6 py-4">{teacher.subject}</td>
                      <td className="px-6 py-4">{teacher.class}</td>
                      <td className="px-6 py-4">{teacher.email}</td>
                      <td className="px-6 py-4">{teacher.gender}</td>
                    </tr>
                  ))}
                </tbody>
              </Link>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeacher;
