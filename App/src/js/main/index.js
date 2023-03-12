import { getLocalStorage } from "../localStorage/getLocalStorage.js";
import { removeList } from "./removeList.js";
import { setList } from "./setList.js";
import { setTh } from "./setTh.js";

export const mainInit = () => {
  removeList();
  const $main_history_list = document.querySelector("#main_history_list");
  const value = getLocalStorage();
  const $th = setTh(value);
  const $tbody = setList(value);
  $tbody.prepend($th);
  $main_history_list.appendChild($tbody);
};
