import { observer } from "mobx-react-lite";
import React from "react";
import TodoState from "../store/TodoState";
import dateLogo from "../img/date.svg";
const TodoItem = observer(({ title, checked, id, visible, dateItem }) => {
  const classes = ["todoitem__text"];
  const classes_block = ["todo-li"];
  if (checked) {
    classes.push("done");
  }
  if (visible === "false") {
    classes_block.push("non-visible");
  }

  let [year, month, day, hours, mins] = dateItem.split("/");
  let date = new Date(year, month - 1, day, hours, mins);
  let now = new Date();

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const classes_date = ["date__text"];

  if (date.getTime() < now.getTime()) {
    classes_date.push("red");
  }

  return (
    <li className={classes_block.join(" ")}>
      <div className="todoitem">
        <div className="todoitem__container">
          <label className="">
            <input
              className="real-check"
              checked={checked}
              type="checkbox"
              onChange={() => TodoState.completedTodo(id)}
            />
            <span className="custom-check"> </span>
          </label>
          <div className="todootem__text-container">
            <p className={classes.join(" ")}>{title}</p>
            <p className={classes_date.join(" ")}>
              <img src={dateLogo} alt="" />
              {hours}:{mins}, {days[date.getDay()]}, {day}, {month}, {year}
            </p>
          </div>
        </div>
        <button
          className="todoitem__btn"
          onClick={() => TodoState.removeTodo(id)}></button>
      </div>
    </li>
  );
});

export default TodoItem;
