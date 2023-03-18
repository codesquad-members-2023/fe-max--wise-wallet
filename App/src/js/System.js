import { $classNode } from "./dom.js";
import { dateformat as dateFormat, dateOneMonth } from "./util.js";

export const expenditureCategories = [
  "생활",
  "식비",
  "교통",
  "쇼핑/뷰티",
  "의료/건강",
  "문화/여가",
  "미분류",
];

export const inputData = {
  date: dateFormat(new Date()).replace(/-/g, ""),
  sign: "minus",
  amount: null,
  detail: null,
  payment: null,
  division: null,
};

export const incomeCategories = ["월급", "용돈", "기타 수입"];

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

  setInputDataValue(key, value) {
    if (key in inputData) {
      inputData[key] = value;
    }

    let testCase = true;

    for (let i in inputData) {
      if (!inputData[i] || inputData[i] === "0") {
        testCase = false;
        break;
      }
    }

    const $Inputbar = $classNode("Inputbar");
    const submitButton = $Inputbar.querySelector("#submit");

    if (testCase) {
      submitButton.className = "item submit active";
      return;
    }

    submitButton.className = "item submit";
  }
}
