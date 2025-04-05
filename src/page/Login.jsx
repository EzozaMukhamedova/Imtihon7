import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { login } from "../service/authService";
import Navbar from "../components/Navbar";
import { FaUser } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { setUser, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Barcha maydonlarni to‘ldiring!");
      return;
    }

    try {
      const response = await login(formData);
      console.log("Server javobi:", response);

      if (response?.token) {
        console.log("Serverdan kelgan token:", response.token);

        setToken(response.token);
        setUser(response.user || {});

        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user || {}));

        console.log("LocalStorage dagi token:", localStorage.getItem("token"));

        navigate("/dashboard");
      } else {
        setError(response?.message || "Email yoki parol noto‘g‘ri.");
      }
    } catch (err) {
      setError("Server bilan bog‘liq xatolik. Qaytadan urinib ko‘ring.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col ">
        <h2 className="text-[#4F4F4F] text-[36px] font-bold text-center">
          Welcome, Log into you account
        </h2>
        <div className="p-4 mx-auto bg-white rounded-lg">
          {error && <p className="text-center text-red-500">{error}</p>}
          <div className="flex items-center py-2 ">
            <h2 className="text-xl py-[16px] text-center text-[16px] mt-[125px] mb-[14px]">
              It is our great pleasure to have <br /> you on board!{" "}
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-[248px] h-[42px] rounded-[4px] p-1 outline-none text-[14px]  border border-gray-300  mb-4 "
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-[248px] h-[42px] rounded-[4px] p-1 mb-2 text-[14px] border border-gray-300 outline-none "
              required
            />
            <button
              type="submit"
              className="w-[248px] h-[42px] rounded-[4px]  bg-[#2D88D4] text-white py-2 mt-[15px] hover:bg-[#138a9c] transition cursor-pointer"
            >
              Login
            </button>
          </form>
        </div>

        <div className="bg-white ml-[15px]">
          <p>
            <span
              className="text-[#2D88D4] font-bold cursor-pointer text-center flex justify-center"
              onClick={() => navigate("/register")}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
