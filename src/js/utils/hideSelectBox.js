import { $ } from "./dom.js";
export const hideSelectBox = (e) => {
  if ($(".payment-select-head").classList.contains("on")) {
    if (!e.target.closest(".payment-select")) {
      $(".payment-select-head").classList.remove("on");
    }
  }
  if ($(".category-select-head").classList.contains("on")) {
    if (!e.target.closest(".category-select")) {
      $(".category-select-head").classList.remove("on");
    }
  }
};
