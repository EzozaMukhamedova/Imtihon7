import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftWall from "./LeftWall";
import Lupa from "../assets/svg/lupa.svg";
import Logout from "../components/Logout";
import axios from "axios";

const AddTeacher = () => {
  const [teachersData, setTeachersData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleRowClick = (teacherId) => {
    navigate(`/teacher-info/${teacherId}`);
  };

  const fetchFlowerCategory = async () => {
    try {
      const response = await axios.get(
        "https://green-shop-backend.onrender.com/api/flower/category/small-plants",
        {
          params: {
            access_token: "67dbc36eaf06d13e0cde0c21",
          },
          headers: {
            Authorization: "Bearer 67dbc36eaf06d13e0cde0c21",
          },
        }
      );
      setTeachersData(response.data.data);
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    }
  };

  useEffect(() => {
    fetchFlowerCategory();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTeachers = teachersData.filter((teacher) =>
    teacher.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-auto">
      <div className="flex h-screen">
        <div className="flex h-full">
          <LeftWall />
        </div>
        <div className="flex flex-col w-full p-8">
          <Logout />
          <div className="flex items-baseline justify-between">
            <h2 className="text-[#4F4F4F] text-[20px] font-[800]">Teachers</h2>
            <button
              className="w-[140px] h-[40px] mr-[28px] bg-[#509CDB] text-white py-2 mt-[15px] transition duration-300 ease-in-out rounded-[8px] hover:bg-[#1a6ca7] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-opacity-50 cursor-pointer active:scale-95"
              onClick={() => navigate("/CreateProfile")}
            >
              Add Teachers
            </button>
          </div>
          <div className="flex items-center w-full space-x-2 my-[30px]">
            <button
              className="p-2 text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              type="button"
            >
              <img
                src={Lupa}
                alt="Search Icon"
                className="w-[20px] h-[20px] transition bg-[#FCFAFA] duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg cursor-pointer"
              />
            </button>
            <input
              type="text"
              placeholder="Search by name"
              className="flex-1 p-2 border border-gray-300 rounded-lg bg-[#FCFAFA] focus:outline-none focus:border-[#509CDB] cursor-pointer text-[14px] focus:text-[#509CDB]"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="relative overflow-x-auto border-blue-100 sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-blue-50 dark:bg-blue-50 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Created
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredTeachers.map((flower, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b cursor-pointer border-b-blue-100 hover:bg-gray-100"
                    onClick={() => handleRowClick(flower._id)}
                  >
                    <td className="px-6 py-4">
                      <img
                        src={flower.main_image}
                        alt={flower.title}
                        className="object-cover w-10 h-10 rounded"
                      />
                    </td>
                    <td className="px-6 py-4">{flower.title}</td>
                    <td className="px-6 py-4">{flower.price} $</td>
                    <td className="px-6 py-4">{flower.created_at}</td>
                    <td className="px-6 py-4">{flower.short_description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeacher;
