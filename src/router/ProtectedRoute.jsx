import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext) || {};
  const finalToken = token || localStorage.getItem("token");

  return finalToken ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
