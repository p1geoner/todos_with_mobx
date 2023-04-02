import { makeAutoObservable, configure } from "mobx";
configure({
  enforceActions: "never",
});
class UserStore {
  username = "";
  token = "";
  first_name = "";
  isAuthenticated = false;
  constructor() {
    makeAutoObservable(this);
  }

  login = async (username, password) => {
    const response = await fetch(
      `http://46.173.215.136/api/users/login/?username=${username}&password=${password}`,
      {
        method: "GET",
      },
    );

    if (response.ok) {
      const { username, API_Key, first_name, last_name } =
        await response.json();
      this.isAuthenticated = true;
      this.username = username;
      this.first_name = first_name;
      this.last_name = last_name;
      this.token = API_Key;
      localStorage.setItem("token", this.token);
    } else {
      // Обрабатываем ошибку авторизации
      alert("Неверные учетные данные");
    }
  };
  auth = async (token) => {
    const response = await fetch(
      `http://46.173.215.136/api/users/auth/?API_Key=${token}`,
      {
        headers: {
          token: `${token}`,
        },
        method: "GET",
      },
    );
    if (response.ok) {
      const { username, API_Key, first_name, last_name } =
        await response.json();
      this.isAuthenticated = true;
      this.username = username;
      this.first_name = first_name;
      this.last_name = last_name;
      this.token = API_Key;
      console.log("харош");
    } else {
      alert("Зайдите еще раз!");
    }
  };
  logout = () => {
    this.isAuthenticated = false;
    this.username = "";
    this.token = "";
    localStorage.setItem("token", " ");
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserStore();
