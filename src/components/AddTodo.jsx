import { observer } from "mobx-react-lite";
import React from "react";
import DateState from "../store/DateState";
import inputState from "../store/inputState";
import TimeState from "../store/TimeState";
import TodoState from "../store/TodoState";
import AddLogo from "../img/addTodo.svg";
const AddTodo = observer(() => {
  function submitHandler(event) {
    event.preventDefault();
    if (DateState.dateValue !== "") {
      if (TimeState.timeValue !== "") {
        let [hours, mins] = TimeState.timeValue.split(":");
        let [year, month, day] = DateState.dateValue.split("-");
        let fullDate =
          year + "/" + month + "/" + day + "/" + hours + "/" + mins;

        if (inputState.inputValue.trim()) {
          TodoState.addTodo(inputState.inputValue, fullDate);

          inputState.setInputState("");
          DateState.setDateState("");
          TimeState.setTimeState("");
        }
      } else {
        alert("Введите время!!!");
      }
    } else {
      alert("Введите дату и время!!!");
    }
  }
  return (
    <form className="addTodo" action="" onSubmit={submitHandler}>
      <div className="addTodo__container">
        <button className="addTodo__btn">
          <img src={AddLogo} alt="" />
        </button>
        <input
          className="addTodo__input"
          value={inputState.inputValue}
          onChange={(event) => inputState.setInputState(event.target.value)}
          placeholder="Add an event"
        />
      </div>
      <div className="addTodo__container">
        <input
          type="date"
          value={DateState.dateValue}
          onChange={(event) => DateState.setDateState(event.target.value)}
          required
        />
        <input
          type="time"
          value={TimeState.timeValue}
          onChange={(event) => TimeState.setTimeState(event.target.value)}
          required
        />
      </div>
    </form>
  );
});

export default AddTodo;
