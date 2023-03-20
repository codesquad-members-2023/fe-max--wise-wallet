import { $ } from "./dom.js";
import { addAllIncome, addAllExpenditure } from "./addAllIncomeExpenditure.js";
export const renderTotalIncomeExpenditure = (key) => {
  if ($('label[for="income-btn"]')) {
    $('label[for="income-btn"]').textContent =
      "수입 " + addAllIncome(key).toLocaleString("ko-KR");
  }
  if ($('label[for="expenditure-btn"]')) {
    $('label[for="expenditure-btn"]').textContent =
      "지출 " + addAllExpenditure(key).toLocaleString("ko-KR");
  }
};
