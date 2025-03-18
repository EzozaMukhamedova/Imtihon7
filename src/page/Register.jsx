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

    if (!formData.name.trim()) {
      setError("Ism maydoni bo‘sh bo‘lishi mumkin emas.");
      return;
    }

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
      setError(
        "Ro‘yxatdan o‘tishda xatolik yuz berdi. Qaytadan urinib ko‘ring."
      );
    }
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col  ml-[200px]">
        <div className="bg-white p-4 w-[600px]">
          <h2 className="text-[#17a2b8] text-[50px] ml-4 font-bold stroke-[3]">
            Sign Up
          </h2>
          <div className="flex items-center py-4 ml-4">
            <FaUser className="mr-3 w-[24px] h-[24px] font-[#333333]" />
            <h2 className="text-[25px]">Create Your Account</h2>
          </div>

          {error && <p className="ml-4 text-red-500">{error}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-[1036px] pl-[6px] p-1 outline-none ml-4 text-[19px] border border-gray-300  mb-4 "
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-[1036px] pl-[6px] p-1 outline-none ml-4 text-[19px] border border-gray-300  mb-1 "
              required
            />
            <p className="ml-4 pb-4 text-[#888] text-[14px]">
              This site uses Gravatar, so if you want a profile image, use a
              Gravatar email.
            </p>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-[1036px] pl-[6px] p-1 ml-4 outline-none text-[19px] border border-gray-300  mb-4 pr-10"
                required
              />
              <button
                type="button"
                className="absolute right-[-450px] top-[13px] cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <BiHide /> : <BiShow />}{" "}
              </button>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Confirm Password"
                value={formData.password}
                onChange={handleChange}
                className="w-[1036px] pl-[6px] p-1 ml-4 outline-none text-[19px] border border-gray-300  mb-2 pr-10"
                required
              />
              <button
                type="button"
                className="absolute right-[-450px] top-[13px] cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <BiHide /> : <BiShow />}{" "}
              </button>
            </div>

            <button
              type="submit"
              className="w-[100px] ml-4 bg-[#17a2b8] text-white py-2 mt-4 cursor-pointer"
            >
              Register
            </button>
          </form>
        </div>

        <div className="bg-white w-[385px]  p-2">
          <div className="flex pl-6 text-center">
            <p className="pr-2">Already have an account?</p>
            <p
              className="text-[#17a2b8] cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Sign In
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
