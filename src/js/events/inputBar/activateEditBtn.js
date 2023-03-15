import { $ } from "../../utils/dom.js";
import { isInputFilled } from "../../utils/isInputFilled.js";

export const activateEditBtn = () => {
  const dateIn = document.querySelector("#date-input");
  const priceIn = document.querySelector("#price-input");
  const memoIn = document.querySelector("#memo-input");
  const paymentIn = document.querySelector(".payment-select-head").innerText;
  const categoryIn = document.querySelector(".category-select-head").innerText;

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
