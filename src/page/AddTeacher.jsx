import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftWall from "./LeftWall";
import Lupa from "../assets/svg/lupa.svg";
import Logout from "../components/Logout";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Pagination } from "antd";

const AddTeacher = () => {
  const [teachersData, setTeachersData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const navigate = useNavigate();

  useEffect(() => {
    fetchFlowerCategory();
    toast.success("Muvaffaqiyatli qo'shildi", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  const fetchFlowerCategory = async () => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  const handleRowClick = (teacherId) => {
    navigate(`/teacher-info/${teacherId}`);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this item? This action cannot be undone."
    );
    if (!isConfirmed) return;

    try {
      await axios.delete(
        `https://green-shop-backend.onrender.com/api/flower/${id}`,
        {
          headers: {
            Authorization: "Bearer 67dbc36eaf06d13e0cde0c21",
          },
        }
      );
      setTeachersData((prev) => prev.filter((item) => item._id !== id));
      toast.success("O‘chirildi!", {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (error) {
      console.error("O‘chirishda xatolik:", error);
      toast.error("Xatolik yuz berdi!", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const filteredTeachers = teachersData.filter((teacher) =>
    teacher.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentTeachers = filteredTeachers.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="mx-auto">
      <ToastContainer />
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
            {isLoading ? (
              <div>
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 space-x-4 animate-pulse"
                  >
                    <Skeleton circle={true} height={40} width={40} />
                    <div className="flex-grow">
                      <Skeleton height={20} width={`90%`} />
                      <Skeleton
                        height={20}
                        width={`60%`}
                        style={{ marginTop: 6 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-900 uppercase bg-blue-50 dark:bg-blue-50 dark:text-gray-400">
                    <tr>
                      <th className="px-6 py-3 text-gray-500">Image</th>
                      <th className="px-6 py-3 text-gray-500">Name</th>
                      <th className="px-6 py-3 text-gray-500">Price</th>
                      <th className="px-6 py-3 text-gray-500">Created</th>
                      <th className="px-6 py-3 text-gray-500">Description</th>
                      <th className="px-6 py-3 text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentTeachers.map((flower, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b border-b-blue-100 hover:bg-gray-100"
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
                        <td className="px-6 py-4">
                          {flower.short_description}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <button
                              className="px-3 py-1 text-white transition bg-[#509CDB] rounded hover:bg-[#1a6ca7bb] cursor-pointer"
                              onClick={() => handleRowClick(flower._id)}
                            >
                              View
                            </button>
                            <button
                              className="px-3 py-1 text-white transition bg-[#FF5C5C] rounded cursor-pointer hover:bg-[#E14C4C]"
                              onClick={() => handleDelete(flower._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-center mt-4">
                  <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={filteredTeachers.length}
                    onChange={handlePageChange}
                    showSizeChanger={false}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeacher;
