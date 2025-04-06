import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftWall from "./LeftWall";
import Logout from "../components/Logout";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors({ ...errors, [name]: "" });
  };

  const handleImageChange = (e) => {
    setTeacher((prevState) => ({
      ...prevState,
      image: e.target.files[0],
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;
    if (!teacher.fullName) {
      newErrors.fullName = "Full name is required.";
      isValid = false;
    }
    if (!teacher.email) {
      newErrors.email = "Email address is required.";
      isValid = false;
    }
    if (!teacher.subject) {
      newErrors.subject = "Subject is required.";
      isValid = false;
    }
    if (!teacher.about) {
      newErrors.about = "Description is required.";
      isValid = false;
    }
    if (!teacher.class) {
      newErrors.class = "Class is required.";
      isValid = false;
    }
    if (!teacher.gender) {
      newErrors.gender = "Gender is required.";
      isValid = false;
    }
    if (!teacher.age) {
      newErrors.age = "Age is required.";
      isValid = false;
    }
    setErrors(newErrors);
    if (!isValid) {
      toast.error("Please fill all required fields!");
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data:", teacher);
      toast.success("Successfully added");
      navigate("/addTeacher");
    }
  };

  return (
    <>
      <ToastContainer />

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
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </Link>
            </div>

            <div className="flex gap-[60px] mt-[24px] w-full"></div>

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
                      className="w-full p-2 border-2 border-[#A7A7A7] rounded-[4px] text-[14px] focus:outline-none focus:border-blue-200"
                    />
                    {errors.fullName && (
                      <p className="text-red-500">{errors.fullName}</p>
                    )}
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
                      className="w-full p-2 border-2 border-[#A7A7A7] rounded-[4px] text-[14px] focus:outline-none focus:border-blue-200"
                    />
                    {errors.email && (
                      <p className="text-red-500">{errors.email}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-[14px] font-[600]">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={teacher.subject}
                      onChange={handleChange}
                      className="w-full p-2 border-2 border-[#A7A7A7] rounded-[4px]  text-[14px] focus:outline-none focus:border-blue-200"
                    >
                      <option value="">Select </option>
                      <option value="math">Rose</option>
                      <option value="science">Lily</option>
                      <option value="history">Tulips</option>
                    </select>
                    {errors.subject && (
                      <p className="text-red-500">{errors.subject}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-[14px] font-[600]">
                      Description
                    </label>
                    <textarea
                      name="about"
                      value={teacher.about}
                      onChange={handleChange}
                      className="w-full h-32 p-2 border-2 border-[#A7A7A7] rounded-[4px] focus:outline-none focus:border-blue-200"
                    ></textarea>
                    {errors.about && (
                      <p className="text-red-500">{errors.about}</p>
                    )}
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
                      className="w-full p-2 border-2 border-[#A7A7A7] rounded-[4px] text-[14px] focus:border-blue-200"
                    >
                      <option value="">Price</option>
                      <option value="male">10 $</option>
                      <option value="female">20 $</option>
                      <option value="female">30 $</option>
                      <option value="female">40 $</option>
                    </select>
                    {errors.class && (
                      <p className="text-red-500">{errors.class}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-[14px] font-[600] ">
                      Gender
                    </label>
                    <select
                      name="gender"
                      value={teacher.gender}
                      onChange={handleChange}
                      className="w-full p-2 border-2 border-[#A7A7A7] rounded-[4px]  text-[14px] focus:border-blue-200"
                    >
                      <option value=""> Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    {errors.gender && (
                      <p className="text-red-500">{errors.gender}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-[14px] font-[600] focus:border-blue-200">
                      Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      placeholder="Age"
                      value={teacher.age}
                      onChange={handleChange}
                      className="w-full p-2 border-2 border-[#A7A7A7] rounded-[4px]  text-[14px] focus:outline-none focus:border-blue-200"
                    />
                    {errors.gender && (
                      <p className="text-red-500">{errors.age}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-[14px] font-[600]">
                      Import Image
                    </label>
                    <input
                      type="file"
                      onChange={handleImageChange}
                      className="w-full p-2 border-2 border-[#A7A7A7] rounded-[4px]  text-[14px] focus:outline-none focus:border-blue-200"
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
