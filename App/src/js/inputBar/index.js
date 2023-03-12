import { addComma } from "../utils/addComma.js";
import { checkInputDate } from "./checkInputDate.js";
import { checkInputPrice } from "./checkInputPrice.js";
import { checkInputsFilled } from "./checkInputsFilled.js";

export const inputBarInit = () => {
  const $date_input = document.getElementById("input_date");
  const $input_price = document.getElementById("input_price");
  const $inputs = document.querySelectorAll("#input_bar input");
  const $input_checkbox = document.querySelector("#input_bar #input_checkbox");

  $date_input.addEventListener("blur", checkInputDate);
  $input_price.addEventListener("keyup", (e) => {
    e.target.value = addComma(e.target.value);
  });
  $input_price.addEventListener("keydown", checkInputPrice);

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
