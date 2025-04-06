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
      {/* <Navbar /> */}
      <div className="flex flex-col border bg-[#FCFAFA] w-[1440px] mx-auto pt-[98px] pb-[125px]">
        <h2 className="text-[#4F4F4F] text-[36px] font-bold text-center ">
          Welcome, Log into you account
        </h2>
        <div className=" mx-auto bg-white border rounded-[5px] mt-[50px] px-[134px]">
          {error && <p className="text-center text-red-500">{error}</p>}
          <div className="text-center ">
            <h2 className="text-[16px] text-gray-600 text-center mt-18 mb-3.5 leading-normal">
              It is our great pleasure to have <br /> you on board!{" "}
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col ">
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
              className="w-[248px] h-[42px] rounded-[4px]  bg-[#2D88D4] text-white py-2 mt-4 cursor-pointer transition duration-300 ease-in-out transform hover:bg-[#1a6ca7] active:scale-95"
            >
              Login
            </button>
            <div className="bg-white ml-[15px] mt-4 mb-[40px]">
              <p>
                <span
                  className="text-[#2D88D4] font-bold cursor-pointer text-center flex justify-center transition duration-300 ease-in-out hover:text-[#1a6ca7] hover:underline"
                  onClick={() => navigate("/register")}
                >
                  Sign Up
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
