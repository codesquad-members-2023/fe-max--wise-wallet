import { $, $All } from "../../utils/dom.js";
import { priceInput } from "./priceInput.js";
import { dateInput } from "./dateInput.js";
import { selectPaymentList } from "./selectPaymentList.js";
import { clickPaymentHead } from "./clickPaymentHead.js";
import { selectCategoryList } from "./selectCategoryList.js";
import { clickCategoryHead } from "./clickCategoryHead.js";

export const inputBarEventHandler = () => {
  $("#price-input").addEventListener("keyup", priceInput);
  //   $("#date-Input").addEventListener("keydown", dateInput);
  $(".payment-select-head").addEventListener("click", clickPaymentHead);
  $(".payment-list-member").addEventListener("click", selectPaymentList);
 
  document.querySelector(".category-list-member").addEventListener("click", selectCategoryList);
  document.querySelector(".category-income-member").addEventListener("click", selectCategoryList);
  document.querySelector(".category-select-head").addEventListener("click", clickCategoryHead);
  // editbtn클릭시/ 렌더
};
