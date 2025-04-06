import React, { useContext, useState } from "react";

import Bell from "../assets/svg/belll.svg";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Logout = () => {
  const navigate = useNavigate();

  const { token, setToken, setUser } = useContext(AuthContext) || {};
  const finalToken = token || localStorage.getItem("token");

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div>
      <div className="flex items-center justify-end ">
        <img
          src={Bell}
          alt="Dashboard Icon"
          className="w-[24px] h-[24px] transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg cursor-pointer"
        />
        <button
          onClick={handleLogout}
          className="py-2 w-[120px] h-[40px] font-semibold text-black transition duration-300 ease-in-out rounded-[8px] hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 cursor-pointer active:text-red-700  hover:underline"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Logout;
