import React, { useContext } from "react";
import { RiCodeSSlashLine } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { token, setToken, setUser } = useContext(AuthContext) || {};
  const finalToken = token || localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="bg-white text-black  border-b-[#17A2B8]">
      <div className="text-black w-[1440px] m-auto flex items-center justify-between h-[61px] ">
        <div className="flex cursor-pointer hover:text-black">
          <NavLink
            to="/"
            className="flex items-center text-black  hover:text-[#17a2b8]"
          >
  
          </NavLink>
        </div>

        <ul className="flex">
          <li>
            <NavLink
              to="/"
              className="text-black  p-[8px] text-[17px] hover:text-[#17a2b8]"
            >
              Home
            </NavLink>
          </li>

          {finalToken ? (
            <>
              <li>
                <NavLink
                  to="/dev"
                  className="text-black  p-[8px] text-[17px] hover:text-[#17a2b8]"
                >
                  Developers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/posts"
                  className="text-black  p-[8px] text-[17px] hover:text-[#17a2b8]"
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className="text-black  p-[8px] text-[17px] hover:text-[#17a2b8]"
                >
                  Dashboard
                </NavLink>
              </li>

              <li>
                <button
                  onClick={handleLogout}
                  className="text-black  pl-[8px] text-[17px] hover:text-red-500 cursor-pointer"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/register"
                  className="text-black  p-[8px] text-[17px] hover:text-[#17a2b8]"
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className="text-white pl-[8px] text-[17px] hover:text-[#17a2b8]"
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
