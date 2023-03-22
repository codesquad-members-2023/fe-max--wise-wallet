import { $ } from "../utils/dom.js";
import { inputStore } from "./inputStore.js";
import { renderListTotalLength } from "../utils/renderListTotalLength.js";
import { validateInputValue } from "../utils/validateInputValue.js";
import { renderTotalIncomeExpenditure } from "../utils/renderTotalIncomeExpenditure.js";
import { renderListByDay } from "../utils/renderListByDay.js";

export const storeInputQuery = (key) => {
  //키는 무엇이 되는가..
  // const uniqueKey = key !== null ? key : new Date().getTime().toString();

  const uniqueKey = new Date().getTime().toString();
  const date = $("#date-input");
  const price = $("#price-input");
  const memo = $("#memo-input");
  const type = $("#plus-minus-btn");
  const payment = $(".payment-select-head");
  const category = $(".category-select-head");

  const storedValue = {
    key: uniqueKey,
    type: type.checked,
    date: date.value,
    price: price.value,
    memo: memo.value,
    payment: payment.innerText,
    category: category.innerText,
  };
  
  if ($("#edit-btn").checked) {
    return;
  }
  if (!$("#edit-btn").checked) {
    localStorage.setItem(uniqueKey, JSON.stringify(storedValue));
    // inputStore.generateList(storedValue);
    renderListTotalLength();
    renderTotalIncomeExpenditure();
    renderListByDay();
  }
  // if (!$("#edit-btn").checked) {
  //   localStorage.setItem(uniqueKey, JSON.stringify(storedValue))
  //   inputStore.generateList(storedValue);
  //   renderListTotalLength();
  //   renderTotalIncomeExpenditure();
  //   renderListByDay(storedValue);
  // }
};
