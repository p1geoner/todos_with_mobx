import { observer } from "mobx-react-lite";
import React from "react";
import TodoState from "../store/TodoState";
import TodoItem from "./TodoItem";

const TodoList = observer(() => {
  return (
    <ul className="todolist">
      {TodoState.todos.map((t) => (
        <TodoItem
          key={t.id}
          id={t.id}
          title={t.title}
          checked={t.completed}
          visible={t.visible}
          dateItem={t.date}
        />
      ))}
    </ul>
  );
});

export default TodoList;
