import { setNow } from "../date/setNow.js";
import { changeCategoryOption } from "./changeCategoryOption.js";

export const resetInputBar = () => {
  const date = document.getElementById("input_date");
  const price = document.getElementById("input_price");
  const isPositive = document.getElementById("price_toggle");
  const content = document.getElementById("input_content");
  const payment = document.getElementById("payment_value");
  const category_select = document.getElementById("category_value");

  setNow();
  if (isPositive.checked) {
    changeCategoryOption();
  }

  price.value = "";
  content.value = "";
  payment.value = "";
  category_select.value = "";
  isPositive.checked = false;

  const $selected_value = document.querySelectorAll(".selected-value");
  const $input = document.querySelector("#input_bar input");

  $selected_value.forEach((div) => {
    div.textContent = "선택하세요";
  });

  // 이벤트 객체를 생성
  const changeEvent = new Event("keyup");
  // input에 직접 change 이벤트를 발생
  $input.dispatchEvent(changeEvent);
};
