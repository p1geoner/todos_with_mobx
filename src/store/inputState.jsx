import { makeAutoObservable } from "mobx";

class InputState {
  inputValue = "";
  constructor() {
    makeAutoObservable(this);
  }

  setInputState(value) {
    this.inputValue = value;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new InputState();
