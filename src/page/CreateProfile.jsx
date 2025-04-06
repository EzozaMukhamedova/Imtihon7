import React, { useContext, useState } from "react";

import LeftWall from "./LeftWall";
import Bell from "../assets/svg/belll.svg";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Logout from "../components/Logout";

function AddTeacherForm() {
  const navigate = useNavigate();

  const [teacher, setTeacher] = useState({
    fullName: "",
    email: "",
    subject: "",
    about: "",
    class: "",
    gender: "",
    age: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setTeacher((prevState) => ({
      ...prevState,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(teacher);
  };

  return (
    <>
      <div className="flex w-full h-screen mx-auto ">
        <div className="flex h-full ">
          <LeftWall />
        </div>
        <div className="w-full  mr-[30px]">
          <div className="mt-[30px] ">
            <Logout />
          </div>
          <div className="flex flex-col ml-[38px] w-full">
            <div className="flex justify-between mt-[14px] items-center">
              <h2 className="text-[#4F4F4F]  text-[20px] font-[800]">
                Add Teacher
              </h2>
              <Link to="/addTeacher" className="block text-white">
                <button
                  type="submit"
                  className="w-[80px]  mr-[65px]    transition-colors   bg-[#509CDB]  text-white py-2    duration-300 ease-in-out  rounded-[8px] hover:bg-[#1a6ca7] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-opacity-50 cursor-pointer active:scale-95"
                  onClick={() => navigate("/addTeacher")}
                >
                  Save
                </button>
              </Link>
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full py-8 mx-auto   text-[#8A8A8A] "
            >
              <div className="flex gap-[60px] mt-[24px]  w-full">
                <div className="">
                  <div className="mb-4 w-[407px] ">
                    <label className="block mb-2 text-[14px] font-[600]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={teacher.fullName}
                      onChange={handleChange}
                      className="w-full p-2 border-2 border-[#A7A7A7] rounded-[4px] text-[14px]"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-[14px] font-[600]">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      value={teacher.email}
                      onChange={handleChange}
                      className="w-full p-2 border-2 border-[#A7A7A7] rounded-[4px] text-[14px]"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-[14px] font-[600]">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={teacher.subject}
                      onChange={handleChange}
                      className="w-full p-2 border-2 border-[#A7A7A7] rounded-[4px]  text-[14px]"
                    >
                      <option value="">Select </option>
                      <option value="math">Rose</option>
                      <option value="science">Lily</option>
                      <option value="history">Tulips</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-[14px] font-[600]">
                      Description
                    </label>
                    <textarea
                      name="about"
                      value={teacher.about}
                      onChange={handleChange}
                      className="w-full h-32 p-2 border-2 border-[#A7A7A7] rounded-[4px]"
                    ></textarea>
                  </div>
                </div>

                <div className="">
                  <div className="mb-4 w-[407px]">
                    <label className="block mb-2 text-[14px] font-[600]">
                      Price
                    </label>

                    <select
                      name="class"
                      value={teacher.class}
                      onChange={handleChange}
                      className="w-full p-2 border-2 border-[#A7A7A7] rounded-[4px] text-[14px]"
                    >
                      <option value="">Price</option>
                      <option value="male">10 $</option>
                      <option value="female">20 $</option>
                      <option value="female">30 $</option>
                      <option value="female">40 $</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-[14px] font-[600] ">
                      Gender
                    </label>
                    <select
                      name="gender"
                      value={teacher.gender}
                      onChange={handleChange}
                      className="w-full p-2 border-2 border-[#A7A7A7] rounded-[4px]  text-[14px]"
                    >
                      <option value=""> Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-[14px] font-[600]">
                      Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      placeholder="Age"
                      value={teacher.age}
                      onChange={handleChange}
                      className="w-full p-2 border-2 border-[#A7A7A7] rounded-[4px]  text-[14px]"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-[14px] font-[600]">
                      Import Image
                    </label>
                    <input
                      type="file"
                      onChange={handleImageChange}
                      className="w-full p-2 border-2 border-[#A7A7A7] rounded-[4px]  text-[14px]"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTeacherForm;
