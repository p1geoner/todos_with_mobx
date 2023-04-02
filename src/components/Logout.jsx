import React, { useEffect } from "react";
import UserStore from "../store/UserStore";
import { Navigate } from "react-router-dom";
export const Logout = () => {
  useEffect(() => {
    UserStore.logout();
  }, []);
  if (UserStore.isAuthenticated) {
    return <div>error</div>;
  } else {
    return <Navigate to="/login" />;
  }
};
