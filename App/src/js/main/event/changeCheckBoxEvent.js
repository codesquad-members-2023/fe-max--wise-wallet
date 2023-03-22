import { getLocalStorage } from "../../localStorage/getLocalStorage.js";
import { createNode } from "../../utils/createNode.js";
import { setList } from "../display/setList.js";

export const changeCheckBoxEvent = () => {
  const $income_toggle = document.getElementById("income_toggle");
  const $expenditure_toggle = document.getElementById("expenditure_toggle");
  let value = getLocalStorage();

  if ($income_toggle !== null && !$income_toggle.checked) {
    value = value.filter((e) => e.isPositive !== true);
  }
  if ($expenditure_toggle !== null && !$expenditure_toggle.checked) {
    value = value.filter((e) => e.isPositive !== false);
  }

  const $td = document.querySelectorAll("#main_history_list td");
  $td.forEach((e) => {
    e.closest("tr").remove();
  });

  const table = `<table>${setList(value)}</table>`;
  const nodeList = createNode(table);
  const $tr = nodeList[0].querySelectorAll("tr");
  const $main_history_list = document.getElementById("main_history_list");
  $tr.forEach((e) => {
    $main_history_list.appendChild(e);
  });
};
