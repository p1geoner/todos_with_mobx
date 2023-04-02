import React from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";
import UserStore from "../store/UserStore";

const HomePage = () => {
  const token = localStorage.getItem("token");

  if (!token || token === " ") {
    return <Navigate to="/login" />;
  } else {
    return <Header></Header>;
  }
};

export { HomePage };
