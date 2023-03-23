import { $ } from "../../utils/dom.js";

export const dateInput = () => {
  let value = e.target.value;
  value = Number(value.replaceAll(",", ""));
  if (isNaN(value)) {
    $("#date-input").value = "";
  } else {
    // const formatValue = value.toLocaleString("ko-KR");
    // $("#date-input").value = formatValue;
    // 날짜만 가능한 형식으로
  }
};
