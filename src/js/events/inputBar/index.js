import { handleTransactionTypeClick } from "./handleTransactionTypeClick.js";
import { handlePriceInputKeydown } from "./handlePriceInputKeydown.js";
import { handlePaymentClick } from "./handlePaymentClick.js";
import { handlePaymentDeleteButtonClick } from "./handlePaymentDeleteButtonClick.js";
import { handlePaymentListClick } from "./handlePaymentListClick.js";
import { handleCategoryClick } from "./handleCategoryClick.js";
import { handleCategoryListClick } from "./handleCategoryListClick.js";
import { handleDateChange } from "./handleDateChange.js";
import { handleMemoKeyup } from "./handleMemoKeyup.js";
import { handlePriceInputFocus } from "./handlePriceInputFocus.js";
import { handlePriceInputBlur } from "./handlePriceInputBlur.js";

export const inputBarEventHandler = () => {
  const $date = document.querySelector("#input-bar__date");
  const $typeIcon = document.querySelector(".input-bar__transaction-type");
  const $priceInput = document.querySelector("#input-bar__price");
  const $payment = document.querySelector("#input-bar__payment");
  const $paymentUl = document.querySelector(".payment-dropdown__ul");
  const $category = document.querySelector("#input-bar__category");
  const $categoryDropdown = document.querySelector(".category-dropdown");
  const $memo = document.querySelector("#input-bar__memo");

  $date.addEventListener("change", handleDateChange);
  $typeIcon.addEventListener("click", handleTransactionTypeClick);
  $priceInput.addEventListener("keydown", handlePriceInputKeydown);
  $priceInput.addEventListener("blur", handlePriceInputBlur);
  $priceInput.addEventListener("focus", handlePriceInputFocus);
  $payment.addEventListener("click", handlePaymentClick);
  $paymentUl.addEventListener("click", handlePaymentDeleteButtonClick);
  $paymentUl.addEventListener("click", handlePaymentListClick);
  $category.addEventListener("click", handleCategoryClick);
  $categoryDropdown.addEventListener("click", handleCategoryListClick);
  $memo.addEventListener("keyup", handleMemoKeyup);
};
