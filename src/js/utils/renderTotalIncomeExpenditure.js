import { $ } from "./dom.js";
import { addUpAllIncome, addUpAllExpenditure } from "./addUpAllIncomeExpenditure.js";
export const renderTotalIncomeExpenditure = () => {
  if ($('label[for="income-btn"]')) {
    $('label[for="income-btn"]').textContent =
      "수입 " + addUpAllIncome().toLocaleString("ko-KR");
  }
  if ($('label[for="expenditure-btn"]')) {
    $('label[for="expenditure-btn"]').textContent =
      "지출 " + addUpAllExpenditure().toLocaleString("ko-KR");
  }
};
