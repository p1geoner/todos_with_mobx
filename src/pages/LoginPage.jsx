import React from "react";
import UserStore from "../store/UserStore";
import { Navigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
const LoginPage = observer(() => {
  function handleSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    UserStore.login(username, password);
  }
  if (UserStore.isAuthenticated) {
    return <Navigate to="/main" />;
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Войти</button>
      </form>
    );
  }
});

export { LoginPage };
