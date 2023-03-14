import { addComma } from "../utils/addComma.js";
import { changeCategoryOption } from "./changeCategoryOption.js";

export const setInputBar = ({
  date,
  price,
  isPositive,
  content,
  payment,
  category_select,
}) => {
  const $input_date = document.getElementById("input_date");
  const $input_price = document.getElementById("input_price");
  const $price_toggle = document.getElementById("price_toggle");
  const $input_content = document.getElementById("input_content");
  const $payment_value = document.getElementById("payment_value");
  const $category_value = document.getElementById("category_value");

  $input_date.value = date;
  changeCategoryOption();

  $input_price.value = addComma(price);
  $price_toggle.checked = isPositive;
  $input_content.value = content;
  $payment_value.value = payment;
  $category_value.value = category_select;

  const $payment_select = document.getElementById("payment_select");
  const $category_select = document.getElementById("category_select");

  $payment_select.querySelector(".selected-value").textContent = payment;
  $category_select.querySelector(".selected-value").textContent =
    category_select;

  const $input = document.querySelector("#input_bar input");

  // 이벤트 객체를 생성
  const changeEvent = new Event("change");
  // input에 직접 change 이벤트를 발생
  $input.dispatchEvent(changeEvent);
};
