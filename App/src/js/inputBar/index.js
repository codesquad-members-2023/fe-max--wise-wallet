import { addComma } from "../utils/addComma.js";
import { changeCategoryOption } from "./changeCategoryOption.js";
import { checkInputDate } from "./checkInputDate.js";
import { checkInputPrice } from "./checkInputPrice.js";
import { checkInputsFilled } from "./checkInputsFilled.js";

export const inputBarInit = () => {
  const $date_input = document.getElementById("input_date");
  const $price_checkbox = document.getElementById("price_checkbox");
  const $input_price = document.getElementById("input_price");
  const $input_checkbox = document.querySelector("#input_bar #input_checkbox");
  const $inputs = document.querySelectorAll("#input_bar input");

  $date_input.addEventListener("blur", checkInputDate);
  $price_checkbox.addEventListener("click", changeCategoryOption);
  $input_price.addEventListener("keydown", checkInputPrice);
  $input_price.addEventListener("keyup", (e) => {
    e.target.value = addComma(e.target.value);
  });
  $inputs.forEach(($input) => {
    $input.addEventListener("change", () => {
      if (checkInputsFilled()) {
        $input_checkbox.disabled = false;
        $input_checkbox.classList.add("active_Btn");
      } else {
        $input_checkbox.disabled = true;
        $input_checkbox.classList.remove("active_Btn");
      }
    });
  });
};
