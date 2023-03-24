import { $ } from "../utils/dom.js";
import { renderListTotalLength } from "../view/renderListTotalLength.js";
import { renderTotalIncomeExpenditure } from "../view/renderTotalIncomeExpenditure.js";
import { addListByDay } from "../events/lists/addListByDay.js";

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
    renderListTotalLength();
    renderTotalIncomeExpenditure();
    addListByDay();
  }
};
