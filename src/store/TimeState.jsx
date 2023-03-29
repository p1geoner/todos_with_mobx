import { makeAutoObservable } from "mobx";

class TimeState {
  timeValue = "";
  constructor() {
    makeAutoObservable(this);
  }

  setTimeState(value) {
    this.timeValue = value;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new TimeState();
