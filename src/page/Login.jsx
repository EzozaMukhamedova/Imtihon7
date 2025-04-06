import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../context/AuthContext";
import { login } from "../service/authService";

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

        toast.success("Login muvaffaqiyatli!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        navigate("/dashboard");
      } else {
        setError("Login xatosi: Email yoki parol noto‘g‘ri.");
      }
    } catch (err) {
      setError("Server bilan bog‘liq xatolik. Qaytadan urinib ko‘ring.");
      console.error("Login error:", err);
    }
  };

  return (
    <>
      <div className="flex flex-col bg-[#FCFAFA] w-full min-h-screen justify-center items-center">
        <h2 className="text-[#4F4F4F] text-[36px] font-bold text-center ">
          Welcome, Log into your account
        </h2>
        <div className="mx-auto bg-white  border-blue-100 rounded-[5px] mt-[50px] px-[134px] py-[70px] transition duration-300 ease-in-out hover:border-blue-200 hover:border-2">
          {error && <p className="text-center text-red-500">{error}</p>}
          <form onSubmit={handleSubmit} className="flex flex-col ">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-[42px] rounded-[4px] p-2 mb-4 border border-gray-300 outline-none hover:scale-105 transition-transform duration-300 hover:border-blue-300"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-[42px] rounded-[4px] p-2 mb-4 border border-gray-300 outline-none hover:scale-105 transition-transform duration-300 hover:border-blue-300"
              required
            />

            <button
              type="submit"
              className="w-full h-[42px] rounded-[4px] bg-[#2D88D4] text-white py-2 mt-4 cursor-pointer transition duration-300 ease-in-out transform hover:bg-[#1a6ca7] active:scale-95"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <p>
              Don't have an account?{" "}
              <span
                className="text-[#2D88D4] font-bold cursor-pointer hover:text-[#1a6ca7] hover:underline"
                onClick={() => navigate("/register")}
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
