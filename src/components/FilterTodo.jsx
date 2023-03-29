import { observer } from "mobx-react-lite";
import React from "react";
import TodoState from "../store/TodoState";
import radioState from "../store/radioState";
const FilterTodo = observer(() => {
  function filterTodo(value) {
    let todos = JSON.parse(window.localStorage.getItem("todos"));
    if (value === "1") {
      todos.map((todo) => {
        todo.visible = "true";

        return todos;
      });
    }
    if (value === "2") {
      todos.map((todo) => {
        if (todo.completed) {
          todo.visible = "false";
        } else {
          todo.visible = "true";
        }

        return todos;
      });
    }
    if (value === "3") {
      todos.map((todo) => {
        if (todo.completed) {
          todo.visible = "true";
        } else {
          todo.visible = "false";
        }

        return todos;
      });
    }
    TodoState.setTodo(todos);
  }

  return (
    <div className="filterTodo">
      {radioState.radioValue.map((item) => (
        <label className="custom-radio" key={item.id}>
          <input
            type="radio"
            name="FilterTodo"
            id={item.id}
            onChange={(e) => filterTodo(e.target.id)}
            className="real-radio"
          />
          <p className="fake-radio">{item.title}</p>
        </label>
      ))}
    </div>
  );
});

export default FilterTodo;
