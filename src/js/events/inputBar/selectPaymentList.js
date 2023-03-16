import { $ } from "../../utils/dom.js";

export const selectPaymentList = (e) => {
  if (e.target.classList.contains("add-payment-btn")) {
    $(".payment-select-head").innerText = "선택하세요";
    return;
  }
  console.log(e.target.closest(".payment-select"))
  if (e.target.nodeName === "BUTTON" ) {
    $(".payment-select-head").innerText = e.target.innerText;
    $(".payment-select-head").classList.remove("on");
  }
};
