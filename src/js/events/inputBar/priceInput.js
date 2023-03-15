import { $ } from "../../utils/dom.js";
/* 세자리마다 콤마 */
export const priceInput = (e) => {
    let value = e.target.value;
    value = Number(value.replaceAll(",", ""));
    if (isNaN(value)) {
      //NaN인지 판별
      $("#price-input").value = "";
    
    } else {
      //NaN이 아닌 경우
      const formatValue = value.toLocaleString("ko-KR");
      $("#price-input").value = formatValue;
    }
};

