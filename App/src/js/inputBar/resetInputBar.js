import { setNow } from "../date/setNow.js";
import { changeCategoryOption } from "./changeCategoryOption.js";

export const resetInputBar = (
  date,
  price,
  isPositive,
  content,
  payment,
  category_select
) => {
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
  const changeEvent = new Event("change");
  // input에 직접 change 이벤트를 발생
  $input.dispatchEvent(changeEvent);
};
