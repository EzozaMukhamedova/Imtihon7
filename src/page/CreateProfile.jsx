import React, { useState } from "react";
import LeftWall from "./LeftWall";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function AddTeacherForm() {
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
      <Navbar />
      <div className="flex mx-auto w-[1440px]">
        <LeftWall />
        <div className="flex flex-col mx-auto border">
          <div className="flex justify-between">
            <h2>Add Teacher</h2>
            <Link to="/addTeacher" className="block text-white">
              <button
                type="submit"
                className="w-[80px] rounded-[4px] px-4 py-2 text-white transition-colors bg-[#509CDB] hover:bg-gray-800"
                onClick={() => navigate("/addTeacher")}
              >
                Save
              </button>
            </Link>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-[1056px] py-8 mx-auto border-2 border-black text-[#8A8A8A] "
          >
            <div className="flex gap-[60px] ">
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
                    <option value="math">Math</option>
                    <option value="science">Science</option>
                    <option value="history">History</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-[14px] font-[600]">
                    About
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
                    Class
                  </label>

                  <select
                    name="class"
                    value={teacher.class}
                    onChange={handleChange}
                    className="w-full p-2 border-2 border-[#A7A7A7] rounded-[4px] text-[14px]"
                  >
                    <option value=""> Class</option>
                    <option value="male">Class2</option>
                    <option value="female">Class3</option>
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
    </>
  );
}

export default AddTeacherForm;
