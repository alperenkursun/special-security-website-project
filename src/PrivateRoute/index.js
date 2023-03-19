import React from "react";
import { Navigate } from "react-router-dom";
import { useLogin } from "../contexts/LoginContext";

const PrivateRoute = ({ children }) => {
  const isLogin = JSON.parse(localStorage.getItem("login"));

  return isLogin ? children : <Navigate to="/" />;
};

export default PrivateRoute;
