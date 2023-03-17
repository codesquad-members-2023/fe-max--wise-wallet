import { dateOneMonth } from "./util.js";

let current = null;

export class System {
  constructor() {}

  init() {
    if (!current) this.setCurrent(dateOneMonth(new Date()));
  }

  getCurrent() {
    return current;
  }

  setCurrent(date) {
    current = date;
  }

}
