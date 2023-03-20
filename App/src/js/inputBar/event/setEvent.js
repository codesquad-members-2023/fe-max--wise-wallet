import { setLocalStorage } from "../../localStorage/setLocalStorage.js";
import { addComma } from "../../utils/addComma.js";
import { changeCategoryOption } from "./changeCategoryOption.js";
import { checkEditInputData } from "./checkEditInputData.js";
import { checkInputDate } from "./checkInputDate.js";
import { checkInputPrice } from "./checkInputPrice.js";
import { checkInputsFilled } from "./checkInputsFilled.js";
import { resetInputBar } from "../display/resetInputBar.js";
import { setMainDisplay } from "../../main/display/setMainDisplay.js";

export const setEvent = () => {
  const $date_input = document.getElementById("input_date");
  const $price_toggle = document.getElementById("price_toggle");
  const $input_price = document.getElementById("input_price");
  const $input_checkbox = document.getElementById("input_checkbox");

  // 저장 버튼
  $input_checkbox.addEventListener("click", (e) => {
    const $selected_list = document.querySelector(".selected_list");
    const key =
      $selected_list !== null
        ? $selected_list.querySelector(".uniqueKey").value
        : null;
    setLocalStorage(key);
    setMainDisplay();
    resetInputBar();
  });
  // yyyymmdd 형식 체크
  $date_input.addEventListener("blur", checkInputDate);
  // 카테고리 분류 변경
  $price_toggle.addEventListener("change", changeCategoryOption);
  // 1000 단위 콤마 추가, 금액 숫자만 입력 가능
  $input_price.addEventListener("input", (e) => {
    checkInputPrice(e);
    e.target.value = addComma(e.target.value);
  });
  const $input_bar = document.getElementById("input_bar");
  // input bar data 변경
  $input_bar.addEventListener("keyup", (e) => {
    const $this = e.target;
    if ($this.tagName === "INPUT") {
      const $selected_list = document.querySelector(".selected_list");
      if ($selected_list !== null) {
        checkEditInputData();
        return;
      }
      checkInputsFilled();
    }
  });
};
