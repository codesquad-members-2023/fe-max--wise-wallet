import { $ } from "../utils/dom.js";
import { inputStore } from "./inputStore.js";
import { renderListTotalLength } from "../utils/renderListTotalLength.js";
import { validateInputValue } from "../utils/validateInputValue.js";
import { renderTotalIncomeExpenditure } from "../utils/renderTotalIncomeExpenditure.js";
import { addListByDay } from "../utils/addListByDay.js";

export const storeInputQuery = () => {

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
    addListByDay();
  }
  // if (!$("#edit-btn").checked) {
  //   localStorage.setItem(uniqueKey, JSON.stringify(storedValue))
  //   inputStore.generateList(storedValue);
  //   renderListTotalLength();
  //   renderTotalIncomeExpenditure();
  //   addListByDay(storedValue);
  // }
};
