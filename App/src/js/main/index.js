import { getLocalStorage } from "../localStorage/getLocalStorage.js";
import { changeCheckBoxEvent } from "./changeCheckBoxEvent.js";
import { removeBtn } from "./removeBtnClickEvent.js";
import { removeList } from "./removeList.js";
import { setList } from "./setList.js";
import { setTh } from "./setTh.js";
import { setEditData } from "../inputBar/setEditData.js";

export const mainInit = () => {
  removeList();
  const $main_history_list = document.getElementById("main_history_list");
  const value = getLocalStorage();
  const $th = setTh(value);
  const $tbody = setList(value);

  $tbody.prepend($th);
  $main_history_list.appendChild($tbody);

  // tr 삭제 버튼
  $main_history_list.addEventListener("click", (e) => {
    const $this = e.target;
    if ($this.classList.contains("remove")) {
      removeBtn($this);
    }
  });

  // tr 클릭
  const $body = document.querySelector("body");
  $body.addEventListener("click", setEditData);
  const $main_income_expenditure = document.getElementById(
    "main_income_expenditure"
  );

  // 수입/지출 필터링
  $main_income_expenditure.addEventListener("change", () => {
    changeCheckBoxEvent();
  });
};
