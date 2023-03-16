import { $, $All } from "../../utils/dom.js";
import { priceInput } from "./priceInput.js";
import { dateInput } from "./dateInput.js";
import { selectPaymentList } from "./selectPaymentList.js";
import { clickPaymentHead } from "./clickPaymentHead.js";
import { selectCategoryList } from "./selectCategoryList.js";
import { clickCategoryHead } from "./clickCategoryHead.js";
import { activateEditBtn } from "./activateEditBtn.js";
import { storeInputQuery } from "./storeInputQuery.js";
import { hideSelectBox } from "../../utils/hideSelectBox.js";

export const inputBarEventHandler = () => {
  $("#price-input").addEventListener("keyup", priceInput);
  //   $("#date-Input").addEventListener("keydown", dateInput);
  $(".payment-select-head").addEventListener("click", clickPaymentHead);
  $(".payment-list-member").addEventListener("click", selectPaymentList);
  document.addEventListener("click", hideSelectBox)

  // $(".category-select-head").addEventListener("click", clickCategoryHead);
  // $(".category-list-member").addEventListener("click", selectCategoryList);
  // $(".category-income-member").addEventListener("click", selectCategoryList);

  $(".input-bar-wrap").addEventListener("click", activateEditBtn);
  $("#edit-btn").addEventListener("click", storeInputQuery);
  // editbtn클릭시/ 렌더
};
