import { makeAutoObservable } from "mobx";

class DateState {
  dateValue = "";
  constructor() {
    makeAutoObservable(this);
  }

  setDateState(value) {
    this.dateValue = value;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new DateState();
