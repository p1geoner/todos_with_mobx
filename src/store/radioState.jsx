import { makeAutoObservable } from "mobx";

class radioState {
  radioValue = JSON.parse(window.localStorage.getItem("radio"));
  constructor() {
    makeAutoObservable(this);
  }
  setValue(value) {
    this.radioValue = value;
  }
  setRadioState(value) {
    this.radioValue = value;
    localStorage.setItem("radio", JSON.stringify(this.radioValue));
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new radioState();
