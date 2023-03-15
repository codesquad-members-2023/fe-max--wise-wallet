import { setLocalStorage } from "../localStorage/setLocalStorage.js";
import { addComma } from "../utils/addComma.js";
import { changeCategoryOption } from "./changeCategoryOption.js";
import { checkEditInputData } from "./checkEditInputData.js";
import { checkInputDate } from "./checkInputDate.js";
import { checkInputPrice } from "./checkInputPrice.js";
import { checkInputsFilled } from "./checkInputsFilled.js";

export const inputBarInit = () => {
  const $date_input = document.getElementById("input_date");
  const $price_toggle = document.getElementById("price_toggle");
  const $input_price = document.getElementById("input_price");
  const $inputs = document.querySelectorAll("#input_bar input");
  const $input_checkbox = document.getElementById("input_checkbox");

  // 저장 버튼
  $input_checkbox.addEventListener("click", (e) => {
    const $selected_list = document.querySelector(".selected_list");

    if ($selected_list !== null) {
      const key = document.querySelector(".selected_list .uniqueKey").value;
      setLocalStorage(key);

      return;
    }
    setLocalStorage();
  });

  // yyyymmdd 형식 체크
  $date_input.addEventListener("blur", checkInputDate);
  // 카테고리 분류 변경
  $price_toggle.addEventListener("change", changeCategoryOption);
  // 금액 숫자만 입력 가능
  $input_price.addEventListener("keydown", checkInputPrice);
  // 1000 단위 콤마 추가
  $input_price.addEventListener("keyup", (e) => {
    e.target.value = addComma(e.target.value);
  });

  // input bar data 변경
  $inputs.forEach(($input) => {
    $input.addEventListener("keyup", () => {
      const $selected_list = document.querySelector(".selected_list");
      if ($selected_list !== null) {
        checkEditInputData();
        return;
      }

      checkInputsFilled();
    });
  });
};
