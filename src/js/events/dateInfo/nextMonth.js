import { $ } from "../../utils/dom.js";
import { MONTHS } from "../../constants/MONTHS.js";

export const nextMonth = () => {
  $(".header-month").textContent = parseInt($(".header-month").textContent) + 1;

  if ($(".header-month").textContent > 12) {
    parseInt($(".header-year").textContent) + 1;
    $(".header-month").textContent = 1;
  }
  $(".header-month-name").textContent =
    MONTHS[$(".header-month").textContent - 1];
};
