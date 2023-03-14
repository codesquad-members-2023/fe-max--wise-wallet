import { addPaymentClickEvent } from "./addPaymentClickEvent.js";
import { removePaymentClickEvent } from "./removePaymentClickEvent.js";
import { selectBoxClickEvent } from "./selectBoxClickEvent.js";

export const customSelectInit = () => {
  const $selectbox = document.querySelectorAll(".select");
  const $add_option = document.querySelectorAll(".add-option");
  const $remove_option_btn = document.querySelectorAll(".remove_option_btn");

  // selectbox 클릭
  $selectbox.forEach(selectBoxClickEvent);

  // 결제수단 추가하기 버튼
  $add_option.forEach(addPaymentClickEvent);

  // 결제수단 삭제 버튼
  $remove_option_btn.forEach(removePaymentClickEvent);
};
