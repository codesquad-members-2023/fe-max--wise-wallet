import { getLocalStorage } from "../localStorage/getLocalStorage.js";
import { setList } from "./setList.js";
import { setTh } from "./setTh.js";

export const mainInit = () => {
  const $main_history_list = document.querySelector("#main_history_list tbody");
  const value = getLocalStorage();
  const $th = setTh(value);
  const $list = setList(value);
  //   console.log($list);
  $main_history_list.appendChild($th);
};
