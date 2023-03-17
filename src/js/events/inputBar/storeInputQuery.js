import { $ } from "../../utils/dom.js";
import { inputStore } from "../../store/inputStore.js";
import { getCurrentTime } from "../../utils/getCurrentTime.js";
import { renderListTotalLength } from "../../utils/renderListTotalLength.js";
import { validateInputValue } from "../../utils/validateInputValue.js";
import { renderTotalIncomeExpenditure } from "../../utils/renderTotalIncomeExpenditure.js";
import { renderListByDay } from "../../utils/renderListByDay.js";

export const storeInputQuery = () => {
  const dateIn = $("#date-input");
  const priceIn = $("#price-input");
  const memoIn = $("#memo-input");
  const typeIn = $("#plus-minus-btn");
  const paymentIn = $(".payment-select-head").innerText;
  const categoryIn = $(".category-select-head").innerText;

  const storedValue = {
    creationTime: getCurrentTime(),
    type: typeIn.checked,
    date: dateIn.value,
    price: priceIn.value,
    memo: memoIn.value,
    paymentIn: paymentIn,
    categoryIn: categoryIn,
  };

  if (!$("#edit-btn").checked ) {
    //&& validateInputValue(storedValue)
    inputStore.generateList(storedValue);
    console.log(inputStore.listArray);
    renderListTotalLength()
    renderTotalIncomeExpenditure()
    renderListByDay()
  }
};
