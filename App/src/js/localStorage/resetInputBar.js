import { setNow } from "../date/setNow.js";

export const resetInputBar = (
  date,
  price,
  isPositive,
  content,
  payment,
  category_select
) => {
  setNow();
  price.value = "";
  isPositive.checked = false;
  content.value = "";
  payment.value = "";
  category_select.value = "";

  const $selected_value = document.querySelectorAll(".selected-value");

  $selected_value.forEach((div) => {
    div.textContent = "선택하세요";
  });
};
