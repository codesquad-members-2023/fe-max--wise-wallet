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
  clickSaveBtn();
  checkDateFormat();
  changeCategory();
  formatCurrencyInput();
  checkInputBarMode();
};

const clickSaveBtn = () => {
  const $input_checkbox = document.getElementById("input_checkbox");

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
};

const checkDateFormat = () => {
  const $date_input = document.getElementById("input_date");
  $date_input.addEventListener("blur", checkInputDate);
};

const changeCategory = () => {
  const $price_toggle = document.getElementById("price_toggle");
  $price_toggle.addEventListener("change", changeCategoryOption);
};

const formatCurrencyInput = () => {
  const $input_price = document.getElementById("input_price");
  $input_price.addEventListener("input", (e) => {
    checkInputPrice(e);
    e.target.value = addComma(e.target.value);
  });
};

const checkInputBarMode = () => {
  const $input_bar = document.getElementById("input_bar");

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
