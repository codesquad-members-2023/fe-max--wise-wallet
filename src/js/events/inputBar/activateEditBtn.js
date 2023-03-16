import { $ } from "../../utils/dom.js";
import { isInputFilled } from "../../utils/isInputFilled.js";

export const activateEditBtn = () => {
  const dateIn = $("#date-input");
  const priceIn = $("#price-input");
  const memoIn = $("#memo-input");
  const paymentIn = $(".payment-select-head").innerText;
  const categoryIn = $(".category-select-head").innerText;

  if (
    isInputFilled(dateIn.value) &&
    isInputFilled(priceIn.value) &&
    isInputFilled(memoIn.value) &&
    isInputFilled(paymentIn) &&
    isInputFilled(categoryIn)
  ) {
    $("#edit-btn").disabled = false;
    $("#edit-btn").checked = true;
  } else {
    $("#edit-btn").disabled = true;
  }
};
