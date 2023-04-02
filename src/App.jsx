import { observer } from "mobx-react-lite";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { MainPage } from "./pages/MainPage";
import UserStore from "./store/UserStore";
import { Logout } from "./components/Logout";
import Header from "./components/Header";
const App = observer(() => {
  return (
    <>
      <header className="navigation">
        <Link to="/home">Home</Link>
        {UserStore.isAuthenticated ? (
          <Link to="/logout">Выйти</Link>
        ) : (
          <Link to="/login">login</Link>
        )}

        <Link to="/main">main</Link>
        <h1 className="username">
          {UserStore.first_name} {UserStore.last_name}
        </h1>
      </header>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
});

export default App;
