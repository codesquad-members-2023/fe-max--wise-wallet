import { $classElement } from "./dom.js";
import { dateFormat, dateOneMonth } from "./utils.js";

export const expenditureCategories = [
  "생활",
  "식비",
  "교통",
  "쇼핑/뷰티",
  "의료/건강",
  "문화/여가",
  "미분류",
];

let inputData = {
  date: dateFormat(new Date()).replace(/-/g, ""),
  sign: "minus",
  amount: null,
  detail: null,
  payment: null,
  division: null,
};

export const incomeCategories = ["월급", "용돈", "기타수입"];

export const categories = expenditureCategories.concat(incomeCategories);

export const categoryNumbers = {};

for (let i = 0; i < categories.length; i++) {
  categoryNumbers[categories[i]] = i;
}

let current = null;

const localHistory = JSON.parse(localStorage.getItem("History"));

let history = localHistory || {};

export class System {
  constructor() {}

  init() {
    if (!current) current = dateOneMonth(new Date());
  }

  post() {
    const { sign, amount, detail, payment, division } = inputData;
    const [year, month, date] = inputData["date"].match(/(20\d\d)|(\d\d)/g);

    const monthTime = new Date(`${year}-${month}-01`).getTime();
    const dateTime = new Date(`${year}-${month}-${date}`).getTime();

    if (!(monthTime in history)) {
      history[monthTime] = {
        date: {},
        totalCount: 0,
        totalIncome: 0,
        totalExpenditure: 0,
      };
    }

    if (!(dateTime in history[monthTime]["date"])) {
      history[monthTime]["date"][dateTime] = {
        data: [],
        totalCount: 0,
        totalIncome: 0,
        totalExpenditure: 0,
      };
    }

    const price = sign === "plus" ? amount : -amount;

    history[monthTime]["totalCount"]++;
    history[monthTime]["date"][dateTime]["totalCount"]++;

    if (price > 0) {
      history[monthTime]["totalIncome"] += amount;
      history[monthTime]["date"][dateTime]["totalIncome"] += amount;
    } else {
      history[monthTime]["totalExpenditure"] += amount;
      history[monthTime]["date"][dateTime]["totalExpenditure"] += amount;
    }
    console.log(history)
    const data = history[monthTime]["date"][dateTime]["data"];
    const insertData = {
      id: data.length ? data[data.length - 1].id + 1 : 1,
      category: categoryNumbers[division],
      body: detail,
      payment: payment,
      price,
    };
    console.log(data);
    data.push(insertData);

    localStorage.setItem("History", JSON.stringify(history));
    this.refreshHistory();
  }

  getCurrent() {
    return current;
  }

  setCurrent(date) {
    current = date;
    setTimeout(() => {
      this.refreshHistory();
    }, 500);
  }

  setInputDataValue(key, value) {
    if (key in inputData) {
      inputData[key] = value;
    }
    this.checkValid();
  }

  checkValid() {
    let valid = true;

    for (let i in inputData) {
      if (!inputData[i] || inputData[i] === "0") {
        valid = false;
        break;
      }
    }

    const $Inputbar = $classElement("Inputbar").domNode;
    const submitButton = $Inputbar.querySelector("#submit");

    if (valid) {
      submitButton.className = "item submit active";
      return;
    }

    submitButton.className = "item submit";
  }

  resetInputDataValue() {
    inputData = {
      date: dateFormat(new Date()).replace(/-/g, ""),
      sign: "minus",
      amount: null,
      detail: null,
      payment: null,
      division: null,
    };
    this.checkValid();
  }

  refreshHistory() {
    const historyElement = $classElement("History");
    historyElement.init();
  }

  getHistory() {
    const monthTime = current.getTime();
    if (!(monthTime in history)) {
      history[monthTime] = {
        date: {},
        totalCount: 0,
        totalIncome: 0,
        totalExpenditure: 0,
      };
    }

    return history[monthTime];
  }
}
