import { observer } from "mobx-react-lite";
import React from "react";
import AddTodo from "../components/AddTodo";
import FilterTodo from "../components/FilterTodo";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import radioState from "../store/radioState";
import TodoState from "../store/TodoState";
import UserStore from "../store/UserStore";
const MainPage = observer(() => {
  if (JSON.parse(window.localStorage.getItem("todos")) === null) {
    const toDo = [];

    localStorage.setItem("todos", JSON.stringify(toDo));

    TodoState.setTodo(toDo);
  }
  if (JSON.parse(window.localStorage.getItem("radio")) === null) {
    const radio = [
      {
        id: 1,
        checked: true,
        title: "All",
      },
      {
        id: 2,
        checked: false,
        title: "In progress",
      },
      {
        id: 3,
        checked: false,
        title: "Completed",
      },
    ];
    localStorage.setItem("radio", JSON.stringify(radio));
    radioState.setValue(radio);
  }
  const isAuth = UserStore.isAuthenticated;
  if (isAuth) {
    return (
      <div>
        <Header />
        <FilterTodo />
        <TodoList />
        <AddTodo />
      </div>
    );
  } else {
    return (
      <div className="error-auth">
        <Header />
        <h1>Авторизируйтесь, что бы пользоваться системой!</h1>
      </div>
    );
  }
});
export { MainPage };
