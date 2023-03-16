import { monthUnitData } from "./util.js";

let current = null;

export class System {
  constructor() {
    this.init();
  }

  init() {
    if (!current) current = monthUnitData(new Date());
  }

  getCurrent() {
    return current;
  }

  setCurrent(date) {
    current = date;
  }
}
