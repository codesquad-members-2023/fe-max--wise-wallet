import { getLocalStorage } from "../localStorage/getLocalStorage.js";
import { changeCheckBoxEvent } from "./changeCheckBoxEvent.js";
import { removeBtn } from "./removeBtnClickEvent.js";
import { removeList } from "./removeList.js";
import { setList } from "./setList.js";
import { setTh } from "./setTh.js";
import { setEditData } from "../inputBar/setEditData.js";

export const mainInit = () => {
  removeList();
  const $main_history_list = document.querySelector("#main_history_list");
  const value = getLocalStorage();
  const $th = setTh(value);
  const $tbody = setList(value);

  $tbody.prepend($th);
  $main_history_list.appendChild($tbody);

  const $removeBtn = document.querySelectorAll("#main .remove");

  $removeBtn.forEach(removeBtn);

  const $history_checkbox = document.querySelectorAll(".history_toggle");
  $history_checkbox.forEach(changeCheckBoxEvent);

  const $body = document.querySelector("body");
  // tr 클릭
  $body.addEventListener("click", setEditData);
};
