import { $ } from "./dom.js";
import { addAllIncome, addAllExpenditure } from "./addAllIncomeExpenditure.js";
export const renderTotalIncomeExpenditure = () => {
  if ($('label[for="income-btn"]')) {
    $('label[for="income-btn"]').textContent =
      "수입 " + addAllIncome().toLocaleString("ko-KR");
  }
  if ($('label[for="expenditure-btn"]')) {
    $('label[for="expenditure-btn"]').textContent =
      "지출 " + addAllExpenditure().toLocaleString("ko-KR");
  }
};
