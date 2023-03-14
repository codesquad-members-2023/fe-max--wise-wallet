import { $ } from "../../utils/dom.js";
import { MONTHS } from "../../constants/MONTHS.js";

export const prevMonth = () => {
  $(".header-month").textContent = parseInt($(".header-month").textContent) - 1;

  if ($(".header-month").textContent < 1) {
     $(".header-year").textContent = parseInt($(".header-year").textContent) - 1;
    $(".header-month").textContent = 12;
  }
  $(".header-month-name").textContent =
    MONTHS[parseInt($(".header-month").textContent) - 1];
};
