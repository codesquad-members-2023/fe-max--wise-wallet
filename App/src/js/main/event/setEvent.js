import { changeCheckBoxEvent } from "./changeCheckBoxEvent.js";
import { removeBtn } from "./removeBtnClickEvent.js";
import { setEditData } from "../../inputBar/display/setEditData.js";

export const setEvent = () => {
  const $main_history_list = document.getElementById("main_history_list");

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
