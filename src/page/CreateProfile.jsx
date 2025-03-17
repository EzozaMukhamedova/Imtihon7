import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const CreateProfile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    status: "",
    company: "",
    website: "",
    location: "",
    skills: "",
    githubusername: "",
    bio: "",
  });

  const { status, company, website, location, skills, githubusername, bio } =
    formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!status || !skills) {
      toast.error("Please fill required fields (Status, Skills)");
      return;
    }

    toast.success("Profile created successfully!");
  };

  return (
    <>
      {" "}
      <Navbar />
      <div className="max-w-3xl p-8 mx-auto bg-white">
        <h1 className="text-4xl text-[#17a2b8] font-bold mb-4">
          Create Your Profile
        </h1>
        <p className="mb-4 text-lg text-gray-700">
          <span className="font-bold">
            Let's get some information to make your profile stand out
          </span>
        </p>
        <small className="block mb-4">* = required field</small>

        <form onSubmit={onSubmit} className="space-y-4">
          <select
            name="status"
            value={status}
            onChange={onChange}
            className="w-full p-2 border border-gray-300 rounded outline-none focus:border-[#17a2b8] transition duration-300"
          >
            <option value="">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Student">Student</option>
            <option value="Instructor">Instructor</option>
          </select>

          <input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={onChange}
            className="w-full p-2 border border-gray-300 rounded outline-none focus:border-[#17a2b8] transition duration-300"
          />

          <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={onChange}
            className="w-full p-2 border border-gray-300 rounded outline-none focus:border-[#17a2b8] transition duration-300"
          />

          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
            className="w-full p-2 border border-gray-300 rounded outline-none focus:border-[#17a2b8] transition duration-300"
          />

          <input
            type="text"
            placeholder="* Skills (eg. HTML,CSS,JavaScript)"
            name="skills"
            value={skills}
            onChange={onChange}
            className="w-full p-2 border border-gray-300 rounded outline-none focus:border-[#17a2b8] transition duration-300"
          />

          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={githubusername}
            onChange={onChange}
            className="w-full p-2 border border-gray-300 rounded outline-none focus:border-[#17a2b8] transition duration-300"
          />

          <textarea
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={onChange}
            className="w-full p-2 border border-gray-300 rounded outline-none focus:border-[#17a2b8] transition duration-300"
          />

          <button
            type="submit"
            className="bg-[#17a2b8] text-white px-6 py-2 cursor-pointer hover:bg-[#138496] transition duration-300"
          >
            Отправить
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-2 ml-4 transition duration-300 bg-gray-200 cursor-pointer hover:bg-gray-300"
          >
            Go Back
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateProfile;
