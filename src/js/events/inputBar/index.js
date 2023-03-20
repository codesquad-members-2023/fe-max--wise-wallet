import { $, $All } from "../../utils/dom.js";
import { priceInput } from "./priceInput.js";
import { dateInput } from "./dateInput.js";
import { selectPaymentList } from "./selectPaymentList.js";
import { clickPaymentHead } from "./clickPaymentHead.js";
import { selectCategoryList } from "./selectCategoryList.js";
import { clickCategoryHead } from "./clickCategoryHead.js";
import { activateEditBtn } from "./activateEditBtn.js";
import { storeInputQuery } from "../../store/storeInputQuery.js";
import { hideSelectBox } from "../../utils/hideSelectBox.js";

export const inputBarEventHandler = () => {
  $("#price-input").addEventListener("input", priceInput);
  //   $("#date-Input").addEventListener("keydown", dateInput);
  $(".payment-select-head").addEventListener("click", clickPaymentHead);
  $(".payment-list-member").addEventListener("click", selectPaymentList);
  document.addEventListener("click", hideSelectBox)

  // $(".category-select-head").addEventListener("click", clickCategoryHead);
  // $(".category-list-member").addEventListener("click", selectCategoryList);
  // $(".category-income-member").addEventListener("click", selectCategoryList);

  $(".input-bar-wrap").addEventListener("click", activateEditBtn);
  $("#edit-btn").addEventListener("click", storeInputQuery);
  //로컬스토리지에 저장
};
