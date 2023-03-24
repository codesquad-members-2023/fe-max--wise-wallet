import { $ } from "../../utils/dom.js";
import { MONTHS } from "../../constants/MONTHS.js";
import { renderMonthlyList } from "../../view/renderMonthlyList.js";
import { renderTotalIncomeExpenditure } from "../../view/renderTotalIncomeExpenditure.js";
import { renderListTotalLength } from "../../view/renderListTotalLength.js";

export const nextMonth = () => {
  $(".header-month").textContent = parseInt($(".header-month").textContent) + 1;

  if ($(".header-month").textContent > 12) {
    $(".header-year").textContent = parseInt($(".header-year").textContent) + 1;
    $(".header-month").textContent = 1;
  }
  $(".header-month-name").textContent =
    MONTHS[parseInt($(".header-month").textContent) - 1];

  renderMonthlyList();
  renderTotalIncomeExpenditure();
  renderListTotalLength();
};
