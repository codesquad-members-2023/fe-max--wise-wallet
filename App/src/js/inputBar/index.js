import { setLocalStorage } from "../localStorage/setLocalStorage.js";
import { addComma } from "../utils/addComma.js";
import { changeCategoryOption } from "./changeCategoryOption.js";
import { checkEditInputData } from "./checkEditInputData.js";
import { checkInputDate } from "./checkInputDate.js";
import { checkInputPrice } from "./checkInputPrice.js";
import { checkInputsFilled } from "./checkInputsFilled.js";

export const inputBarInit = () => {
  const $date_input = document.getElementById("input_date");
  const $price_checkbox = document.getElementById("price_checkbox");
  const $input_price = document.getElementById("input_price");
  const $inputs = document.querySelectorAll("#input_bar input");
  const $input_checkbox = document.getElementById("input_checkbox");

  $input_checkbox.addEventListener("click", (e) => {
    const $isEdit = document.getElementById("isEdit").checked;

    if ($isEdit) {
      const key = document.querySelector(".selected_list .uniqueKey").value;

      setLocalStorage(key);

      return;
    }
    setLocalStorage();
  });
  $date_input.addEventListener("blur", checkInputDate);
  $price_checkbox.addEventListener("click", changeCategoryOption);
  $input_price.addEventListener("keydown", checkInputPrice);
  $input_price.addEventListener("keyup", (e) => {
    e.target.value = addComma(e.target.value);
  });

  // input bar data 변경
  $inputs.forEach(($input) => {
    $input.addEventListener("keyup", () => {
      const $isEdit = document.getElementById("isEdit").checked;
      if ($isEdit) {
        checkEditInputData();

        return;
      }

      checkInputsFilled();
    });
  });
};
