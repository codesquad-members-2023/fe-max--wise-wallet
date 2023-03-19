import { getLocalStorage } from "../localStorage/getLocalStorage.js";
import { setList } from "./setList.js";

export const changeCheckBoxEvent = () => {
  const $income_toggle = document.getElementById("income_toggle");
  const $expenditure_toggle = document.getElementById("expenditure_toggle");
  const $main_history_list = document.querySelector("#main_history_list");

  let value = getLocalStorage();

  if ($income_toggle !== null) {
    value = $income_toggle.checked
      ? value
      : value.filter((e) => e.isPositive !== true);
  }
  if ($expenditure_toggle !== null) {
    value = $expenditure_toggle.checked
      ? value
      : value.filter((e) => e.isPositive !== false);
  }

  const $th = document.querySelector("#main_history_list th");
  $main_history_list.firstElementChild.remove();
  const $tbody = setList(value);
  $tbody.prepend($th);
  $main_history_list.appendChild($tbody);
};
