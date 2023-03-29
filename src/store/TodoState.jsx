import { makeAutoObservable } from "mobx";

class TodoState {
  todos = JSON.parse(window.localStorage.getItem("todos"));
  constructor() {
    makeAutoObservable(this);
  }
  addTodo(title, date) {
    this.todos = this.todos.concat([
      {
        id: Date.now(),
        completed: false,
        visible: false,
        title,
        date,
      },
    ]);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  completedTodo(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    console.log(this.todos);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  setTodo(value) {
    this.todos = value;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new TodoState();
