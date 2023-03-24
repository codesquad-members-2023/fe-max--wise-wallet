import { $ } from "../../utils/dom.js";

export const dateInput = (e) => {
  let value = e.target.value;
  value = Number(value.replaceAll(",", ""));
  if (isNaN(value)) {
    $("#date-input").value = "";
  } else {
    // 날짜만 가능한 형식으로
  }
};
