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
      <div className="flex flex-col ml-[200px]">
        <div className="bg-white p-4 w-[600px] rounded-lg">
          <h2 className="text-[#17a2b8] text-[50px] font-bold">Sign In</h2>
          {error && <p className="text-center text-red-500">{error}</p>}
          <div className="flex items-center py-2 ">
            <FaUser className="w-[24px] h-[24px] mr-3" />
            <h2 className="text-xl py-[16px]">Sign Into Your Account</h2>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-[1063px] p-1 outline-none text-[19px]  border border-gray-300  mb-4 "
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-[1063px] p-1 mb-2 text-[19px] border border-gray-300 outline-none "
              required
            />
            <button
              type="submit"
              className="w-[80px] bg-[#17a2b8] text-white py-2 mt-[15px] hover:bg-[#138a9c] transition cursor-pointer"
            >
              Login
            </button>
          </form>
        </div>

        <div className="bg-white w-[300px] ml-[15px]">
          <p>
            Don't have an account?{" "}
            <span
              className="text-[#17a2b8] cursor-pointer"
              onClick={() => navigate("/dashboard")}
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
