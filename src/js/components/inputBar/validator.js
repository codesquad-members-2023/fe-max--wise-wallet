import { PAYMENT_TYPES } from "../../constants/paymentTypes.js";
import { getCategories } from "../../constants/categories.js";
import { getNumberWithoutComma } from "../../utils/numbers.js";
import { initDefaultDate } from "./dateInput.js";
import { initDefaultPrice } from "./priceInput.js";
import { deactivateSelectBox } from "./dropdown.js";

const inputBar = document.querySelector(".input-bar");
const dateInput = inputBar.querySelector("#input-date");
const priceInput = inputBar.querySelector("#input-price");
const signInput = inputBar.querySelector("#sign-switcher");
const contentInput = inputBar.querySelector("#input-content");
const paymentTypeInput = inputBar.querySelector("#input-payment-type");
const categoryInput = inputBar.querySelector("#input-category");
const checkButton = inputBar.querySelector(".input-bar__check-button");

const isValidDate = () => {
  const date = dateInput.value;
  const regex = /^\d{4}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/;
  return regex.test(date);
};

const isValidPrice = () => {
  const price = priceInput.value;
  const sign = signInput.checked ? -1 : 1;
  return price * sign !== 0;
};

const isValidContent = () => {
  const content = contentInput.value;
  return typeof content === "string" && content.trim().length !== 0;
};

const isValidPaymentType = () => {
  const paymentType = paymentTypeInput.value;
  return PAYMENT_TYPES.includes(paymentType);
};

const isValidCategory = () => {
  const category = categoryInput.value;
  const isOutcome = signInput.checked;
  return getCategories(isOutcome).includes(category);
};

const checkAllInputValues = () => {
  if (isValidDate() && isValidPrice() && isValidContent() && isValidPaymentType() && isValidCategory()) {
    checkButton.classList.add("active");
    return;
  }
  checkButton.classList.remove("active");
};

const getInOutcome = () => {
  return {
    date: dateInput.value,
    price: getNumberWithoutComma(priceInput.value),
    isOutcome: signInput.checked,
    content: contentInput.value,
    paymentType: paymentTypeInput.value,
    category: categoryInput.value,
  };
};

const getMonthInOutcomes = (month) => {
  const data = localStorage.getItem(month);
  return JSON.parse(data) ?? {};
};

const resetInputBar = () => {
  initDefaultDate();
  initDefaultPrice();
  contentInput.value = "";

  const dropdowns = inputBar.querySelectorAll(".dropdown");
  dropdowns.forEach((d) => {
    deactivateSelectBox(d);
  });
};

const saveInOutcome = (e) => {
  e.preventDefault();

  const inOutcome = getInOutcome();
  const monthYear = inOutcome.date.slice(0, -2);
  const monthData = getMonthInOutcomes(monthYear);
  const dateList = monthData[inOutcome.date] ?? [];

  dateList.push(inOutcome);
  monthData[inOutcome.date] = dateList;
  localStorage.setItem(monthYear, JSON.stringify(monthData));

  resetInputBar();
};

inputBar.addEventListener("input", checkAllInputValues);
inputBar.addEventListener("click", checkAllInputValues);
checkButton.addEventListener("click", saveInOutcome);
