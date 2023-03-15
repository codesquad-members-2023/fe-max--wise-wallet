import { $, $All } from "../../utils/dom.js";
import { priceInput } from "./priceInput.js";
import { dateInput } from "./dateInput.js";
import { clickPaymentHead } from "./clickPaymentHead.js";
import { selectPaymentList } from "./selectPaymentList.js"

export const inputBarEventHandler = () => {
  $("#price-input").addEventListener("keyup", priceInput);
  //   $("#date-Input").addEventListener("keydown", dateInput);
  $(".payment-select-head").addEventListener("click", clickPaymentHead);
  $(".payment-list-member").addEventListener("click",selectPaymentList)
  // editbtn클릭시/ 렌더
};
