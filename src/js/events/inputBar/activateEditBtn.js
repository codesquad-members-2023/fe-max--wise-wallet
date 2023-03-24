import { $ } from "../../utils/dom.js";
import { isInputFilled } from "./isInputFilled.js";

export const activateEditBtn = () => {
  const date = $("#date-input");
  const price = $("#price-input");
  const memo = $("#memo-input");
  const payment = $(".payment-select-head").innerText;
  const category = $(".category-select-head").innerText;

  if (
    isInputFilled(date.value) &&
    isInputFilled(price.value) &&
    isInputFilled(memo.value) &&
    isInputFilled(payment) &&
    isInputFilled(category)
  ) {
    $("#edit-btn").disabled = false;
    $("#edit-btn").checked = true;
  } else {
    $("#edit-btn").disabled = true;
  }
};
