import { setTodayDateInput } from "../../date/setTodayDateInput.js";
import { changeCategoryOption } from "../event/changeCategoryOption.js";

export const resetInputBar = () => {
  const $input_price = document.getElementById("input_price");
  const $price_toggle = document.getElementById("price_toggle");
  const $input_content = document.getElementById("input_content");
  const $payment_value = document.getElementById("payment_value");
  const $category_value = document.getElementById("category_value");

  setTodayDateInput();
  if ($price_toggle.checked) {
    changeCategoryOption();
  }

  $input_price.value = "";
  $input_content.value = "";
  $payment_value.value = "";
  $category_value.value = "";
  $price_toggle.checked = false;

  const $selected_text = document.querySelectorAll(".selected_text");
  $selected_text.forEach(($selected) => {
    $selected.textContent = "선택하세요";
  });

  // 이벤트 객체를 생성
  const changeEvent = new Event("keyup", { bubbles: true });
  // 직접 이벤트를 발생
  $input_price.dispatchEvent(changeEvent);
};
