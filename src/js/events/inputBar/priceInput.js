import { $ } from "../../utils/dom.js";

export const priceInput = (e) => {
  let value = e.target.value;
  value = Number(value.replaceAll(",", ""));
  if (isNaN(value)) {
    $("#price-input").value = "";
    
  } else {
    const formatValue = value.toLocaleString("ko-KR");
    $("#price-input").value = formatValue;
  }
};
