import { getLocalStorage } from "../localStorage/getLocalStorage.js";
import { setList } from "./setList.js";

export const changeCheckBoxEvent = ($checkbox) => {
  $checkbox.addEventListener("change", (e) => {
    const $income_toggle = document.getElementById("income_toggle");
    const $expenditure_toggle = document.getElementById("expenditure_toggle");
    const $main_history_list = document.querySelector("#main_history_list");

    let value = getLocalStorage();

    if ($income_toggle.checked && $expenditure_toggle.checked) {
      value = value;
    } else if (!$income_toggle.checked && !$expenditure_toggle.checked) {
      value = [];
    } else if ($income_toggle.checked) {
      value = value.filter((item) => item.isPositive === true);
    } else {
      value = value.filter((item) => item.isPositive === false);
    }
    const $th = document.querySelector("#main_history_list th");

    $main_history_list.firstElementChild.remove();

    const $tbody = setList(value);

    $tbody.prepend($th);
    $main_history_list.appendChild($tbody);
  });
};
