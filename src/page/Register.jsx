import React, { useContext, useState } from "react";
import { BiShow, BiHide } from "react-icons/bi"; // 👁️
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { register } from "../service/authService";
import { FaUser } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setUser, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // if (!formData.name.trim()) {
    //   setError("Ism maydoni bo‘sh bo‘lishi mumkin emas.");
    //   return;
    // }

    const body = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      password: formData.password.trim(),
    };

    try {
      const response = await register(body);
      if (response?.token) {
        setToken(response.token);
        setUser({});
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify({}));

        toast.success("Ro‘yxatdan o‘tish muvaffaqiyatli!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        setError("Ro‘yxatdan o‘tishda muammo yuz berdi.");
      }
    } catch (err) {
      setError("Xatolik! Qaytadan urinib ko‘ring.");
    }
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col ">
        <h1>salom</h1>
        <div className="p-4 mx-auto bg-white ">
          <h2 className="text-[#4F4F4F] text-center text-[36px]  font-bold stroke-[3]">
            Welcome, Sign up
          </h2>
          <div className="flex items-center py-4 ml-9 mt-[125px] mb-[34px]">
            <h2 className="text-[16px] text-[#667085] text-center">
              It is our great pleasure to have <br /> you on board!{" "}
            </h2>
          </div>

          {error && <p className="ml-4 text-red-500">{error}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col ">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-[248px] h-[42px] rounded-[4px] pl-[6px] p-1 outline-none ml-4 text-[19px] border border-gray-300  mb-4 "
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-[248px] h-[42px] rounded-[4px] pl-[6px] p-1 outline-none ml-4 text-[14px] border border-gray-300  mb-[14px] "
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-[248px] h-[42px] rounded-[4px] pl-[6px] p-1 ml-4 outline-none text-[14px] border border-gray-300  mb-4 pr-10"
                required
              />
              <button
                type="button"
                className="absolute right-[40px] top-[13px] cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <BiHide /> : <BiShow />}{" "}
              </button>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create your Password"
                value={formData.password}
                onChange={handleChange}
                className="w-[248px] h-[42px] rounded-[4px] pl-[6px] p-1 ml-4 outline-none text-[14px] border border-gray-300  mb-2 pr-10"
                required
              />
              <button
                type="button"
                className="absolute right-[40px] top-[13px] cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <BiHide /> : <BiShow />}{" "}
              </button>
            </div>

            <button
              type="submit"
              className="w-[248px] h-[42px] rounded-[4px] ml-4 bg-[#2D88D4] text-white py-2 mt-4 cursor-pointer"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
